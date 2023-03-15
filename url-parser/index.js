const {
  areStrings,
  splitIntoParts,
  partsMatches,
  mapValuesIntoHash,
} = require('./utils')

//PARSING
function parseUrl(urlFormat, urlInstance) {
  if (!areStrings(urlFormat, urlInstance)) {
    throw new Error('Both urlFormat and urlInstance must be strings')
  }

  const urlFormatParts = splitIntoParts(urlFormat)
  const urlInstanceParts = splitIntoParts(urlInstance)

  if (!partsMatches(urlFormatParts, urlInstanceParts)) {
    throw new Error('url Instance does not match url Format')
  }

  const hash = mapValuesIntoHash(urlFormatParts, urlInstanceParts, urlInstance)

  if (hash) {
    return hash
  } else {
    throw new Error('urlInstance does not match urlFormat')
  }
}

const urlFormat = '/:version/api/:collection/:id'
const urlInstance = '/6/api/listings/3?sort=desc&limit=10'

try {
  const params = parseUrl(urlFormat, urlInstance)
  console.log(params)
} catch (error) {
  console.error(error.message)
}
