const uploadToCDN = require('../cdn/main');
const textToSpeech = require('@google-cloud/text-to-speech');


/** Get vocals from the google TTS api 
 * requires environment variable GOOGLE_APPLICATION_CREDENTIALS=key path
 */
async function vocalize(text) {
    const client = new textToSpeech.TextToSpeechClient();
    const request = {
        input: {text},
        audioConfig: {audioEncoding: 'MP3'},
        voice: {languageCode: 'en-US', ssmlGender: 'FEMALE', name: 'en-US-Wavenet-F'},
    };
    const [response] = await client.synthesizeSpeech(request);
    return response.audioContent
}

/** Vocalize and then upload to CDN
 */
async function getVocalUrl(textToVocalize, storageData) {
    const vocalData = await vocalize(textToVocalize);
    const vocalUrl = await uploadToCDN(vocalData, storageData);
    return vocalUrl
}

module.exports = getVocalUrl;
