const fs = require('fs');
const util = require('util');


/** Dummy upload to CDN: write locally but send cdn path */
async function uploadToCDN(vocalData, storageData) {
    // Write the binary audio content to a local file
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(`${storageData.fileName}.mp3`, vocalData, 'binary');

    return `https://groundnews.b-cdn.net${storageData.directory}/${storageData.fileName}`;
}

module.exports = uploadToCDN;
