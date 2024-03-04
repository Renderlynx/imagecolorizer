// imagecolorizer.js

// Importing necessary modules
const Jimp = require('jimp');
const newcolorgen = require('newcolorgen');

// Function to colorize grayscale image
async function colorizeImage(inputImagePath, outputImagePath, baseColor, numColors) {
    // Read grayscale image
    const image = await Jimp.read(inputImagePath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;

    // Generate color palette
    const palette = newcolorgen(baseColor, numColors);

    // Colorize image
    image.scan(0, 0, width, height, function(x, y, idx) {
        const grayscaleValue = this.bitmap.data[idx]; // Grayscale value
        const colorIndex = Math.floor(grayscaleValue / (255 / numColors)); // Calculate index based on grayscale value
        const color = palette[colorIndex]; // Get color from palette
        this.bitmap.data[idx] = Jimp.cssColorToHex(color).slice(1,); // Update pixel color
        this.bitmap.data[idx + 1] = Jimp.cssColorToHex(color).slice(3,5);
        this.bitmap.data[idx + 2] = Jimp.cssColorToHex(color).slice(5,7);
        this.bitmap.data[idx + 3] = 255; // Set alpha channel
    });

    // Save colorized image
    await image.writeAsync(outputImagePath);
}

// Export the colorizeImage function
module.exports = colorizeImage;
