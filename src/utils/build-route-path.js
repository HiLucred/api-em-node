export function buildRoutPath(path) {
  const routerParamaterRegex = /:([a-zA-Z]+)/g
  const pathWithParams = path.replaceAll(
    routerParamaterRegex,
    '(?<$1>[a-z0-9\-_]+)'
  )
  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

  return pathRegex
}
