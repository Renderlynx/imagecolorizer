# imagecolorizer

A module for colorizing grayscale images using color palettes generated with the newcolorgen module.

## Installation

You can install `imagecolorizer` via npm:

```bash
npm install imagecolorizer
```

## Usage

```javascript
const colorizeImage = require('imagecolorizer');

// Example usage
const inputImagePath = 'grayscale_image.jpg';
const outputImagePath = 'colorized_image.jpg';
const baseColor = '#3498db'; // Base color in hex format
const numColors = 5; // Number of colors in the palette

colorizeImage(inputImagePath, outputImagePath, baseColor, numColors)
    .then(() => console.log('Image colorization completed.'))
    .catch(err => console.error('Error:', err));
```

Make sure to replace `'grayscale_image.jpg'` with the path to your grayscale image. This module reads the grayscale image, generates a color palette using `newcolorgen`, and then colorizes the grayscale image based on the palette. Finally, it saves the colorized image to the specified output path.

## License

This module is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
