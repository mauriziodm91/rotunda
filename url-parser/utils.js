function areStrings(format, instance) {
  return typeof format === 'string' && typeof instance === 'string'
    ? true
    : false
}

function splitIntoParts(url) {
  return url.split('/').filter((str) => str !== '')
}

function partsMatches(format, instance) {
  return format.length === instance.length ? true : false
}

function extractNumberFromParamString(paramString) {
  return isNaN(Number(paramString)) ? paramString : Number(paramString)
}

function mapValuesIntoHash(formatParts, instanceParts, urlInstance) {
  const params = {}

  for (let i = 0; i < formatParts.length; i++) {
    const formatPart = formatParts[i]

    if (formatPart.startsWith(':')) {
      const paramName = formatPart.slice(1)
      const paramValue = instanceParts[i]
      if (paramName === 'id') {
        params[paramName] = extractNumberFromParamString(
          paramValue.split('?')[0]
        )
      } else {
        params[paramName] = extractNumberFromParamString(paramValue)
      }
    } else if (formatPart !== instanceParts[i]) {
      return null
    }
  }

  const queryParamString = urlInstance.split('?')[1]

  if (queryParamString) {
    const queryParams = queryParamString.split('&')
    queryParams.forEach((param) => {
      const [name, value] = param.split('=')
      params[name] = extractNumberFromParamString(value)
    })
  }

  return params
}

module.exports = {
  areStrings,
  splitIntoParts,
  partsMatches,
  mapValuesIntoHash,
}
