const fileSystem = require('fs');
const path = require('path');

const staticPath = 'public';

module.exports = function (req, res) {
    const { filename, pathname } = req.params;
    const filePath = path.join(projectPath, pathname ? `${staticPath}/${pathname}/${filename}` : `${staticPath}/${filename}`);
    const file = fileSystem.statSync(filePath);
    console.info('qqqqqq', filePath);

    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': file.size
    });

    const readStream = fileSystem.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(res);
};