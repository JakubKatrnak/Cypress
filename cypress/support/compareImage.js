
const fs = require('fs');
const pixelmatch = require('pixelmatch').default;
const PNG = require('pngjs').PNG;

function compareImages(imgExport, imgExpected) {

    // read and decode pngs into arrays of pixels
    const imgExpo = PNG.sync.read(fs.readFileSync(imgExport));
    const imgExpe = PNG.sync.read(fs.readFileSync(imgExpected));

    // get resolution of the images (assumption is they match)
    const { width, height } = imgExpo;

    // compare the pixel difference
    const pixelDif = pixelmatch(

        imgExpo.data,
        imgExpe.data,
        null,
        width,
        height,
        // strict threshold
        { threshold: 0.1 }

    )

    // return number of different pixels, expected 0
    return pixelDif;

}

module.exports = compareImages