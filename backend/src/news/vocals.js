const getVocalUrl = require('../vocals/main');

/** Generate audio then return a summary with an audioUrl
 */
async function giveSummaryAudioUrl(summary) {

    /** extract the bias statement and a description */
    const getVocalSummary = (summary) => {
        const removeBolding = (str) => str.replace('<b>', '').replace('</b>', '');
        const readableBias = removeBolding(summary.blindspotData.coverageProfileStatement);
        return readableBias + " : " + summary.description;
    }

    const textToVocalize = getVocalSummary(summary);
    const audioUrl = await getVocalUrl(textToVocalize, { 
        directory: '/audio/summary',
        fileName: `summary_${summary.id}`
    });

    return {...summary, audioUrl}
}

async function ensureSummaryHasAudioUrl(summary) {
    if (summary.audioUrl) {
        return summary
    }
    return await giveSummaryAudioUrl(summary)
}


module.exports = ensureSummaryHasAudioUrl;
