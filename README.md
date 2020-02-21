# Noroff FEU - Workflow 2 Course Assignment

npm i copy-webpack-plugin -D to get the images

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

new ImageminPlugin({
plugins: [
imageminMozjpeg({
quality: 50, this is the one
progressive: true
})
]
}),
