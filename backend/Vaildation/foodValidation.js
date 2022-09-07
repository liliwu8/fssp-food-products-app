const isValidUrl = (image) => {
  return image.substring(0, 7) === 'http://' ||
    image.substring(0, 8) === 'https://'
    ? image
    : 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
}

const getFormattedName = (name) => {
  const result = name
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.length <= 2 ? word : word[0].toUpperCase() + word.slice(1)
    })
    .join(' ')
  return result
}
module.exports = {
  isValidUrl,
  getFormattedName,
}
