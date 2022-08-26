const isValidUrl = (image) => {
  return image.substring(0, 7) === 'http://' ||
    image.substring(0, 8) === 'https://'
    ? image
    : 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
}


module.exports = {
  isValidUrl,
}