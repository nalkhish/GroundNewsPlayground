const fs = require('fs');
const util = require('util');

const express = require('express');
const uuid = require('uuid');
const textToSpeech = require('@google-cloud/text-to-speech');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 'api/private/event/:id/summary'
app.get('/', async (req, res) => {
    // check auth and authorization in database's pattern

    /** Dummy fetch summary from database */ 
    const getSummary = (id) => {
        const summary = {
            id: uuid.v4(),
            blindspotData: {
                coverageProfileStatement: "This news story only has <b>11% right</b> political bias coverage",
            },
            description: "Donald Trump plans to build 2,300 luxury homes at his Doral golf resort in the Miami area. The club is the biggest revenue generator in his golf business, but has suffered from a one-two punch of a divisive presidency and coronavirus shutdowns. The Trump Organization's plans for Doral are part of a string of recent business moves after months of relative quiet.",
            audioUrl: ""
        }
        return summary
    }
    const ensureSummaryHasAudioUrl = async (summary) => {
        if (summary.audioUrl) {
            return summary
        }
        /** extract the bias statement and a description */
        const getVocalSummary = (summary) => {
            const removeBolding = (str) => str.replace('<b>', '').replace('</b>', '');
            return removeBolding(summary.blindspotData.coverageProfileStatement) + " : " + summary.description;
        }
        /** Get vocals from the google TTS api 
         * requires environment variable GOOGLE_APPLICATION_CREDENTIALS=key path
        */
        const vocalize = async (text) => {
            const client = new textToSpeech.TextToSpeechClient();
            const request = {
                input: {text},
                audioConfig: {audioEncoding: 'MP3'},
                voice: {languageCode: 'en-US', ssmlGender: 'FEMALE', name: 'en-US-Wavenet-F'},
            };
            const [response] = await client.synthesizeSpeech(request);
            return response.audioContent
        }
        /** Dummy upload to cdn: write locally but send cdn path */
        const uploadToCDN = async (vocalData, fileName) => {
            // Write the binary audio content to a local file
            const writeFile = util.promisify(fs.writeFile);
            await writeFile(`${fileName}.mp3`, vocalData, 'binary');

            const DIRECTORY = '/audio/summary/';
            return `https://groundnews.b-cdn.net${DIRECTORY}/${fileName}`;
        }

        const textToVocalize = getVocalSummary(summary);
        const vocalData = await vocalize(textToVocalize);
        const audioUrl = await uploadToCDN(vocalData, `summary_${summary.id}`);

        return {...summary, audioUrl}
    }

    let summary = getSummary(1);
    if (!summary) {
        return res.status(404).json({ 'error': `Did not find summary with id ${id}`});
    }

    summary = await ensureSummaryHasAudioUrl(summary);
    return res.json({ summary })
})

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Running on ${PORT}`))