// ?search=Gabriel
export function extractQueryParams(query) {
  const queryFormatted = query
    .substr(1)
    .split('&')
    .reduce((queryParams, param) => {
      const [key, value] = param.split('=')

      queryParams[key] = value

      return queryParams
    }, {})

  return queryFormatted
}
