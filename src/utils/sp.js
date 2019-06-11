/**
 * ######  Warning  ######
 * Output some tool functions needed for this project
 * No other file dependencies are allowed
 */

/**
 * buildUrl   Function of URL link splicing parameters
 * @param {String} url Links requiring splicing parameters
 * @param {Object} opt Objects that need to splice parameters into links
 * @returns {String} Return the link completed by splicing
 */
export const buildUrl = (url, opt = {}) => {
  const hasParams = url.indexOf('?') > -1 ? true : false;
  let paramsStrList = [];
  Object.keys(opt).forEach(el => {
    paramsStrList.push(`${el}=${opt[el]}`)
  })
  if (hasParams) {
    url = url + '&' + paramsStrList.join('&');
  } else {
    url = url + '?' + paramsStrList.join('&');
  }
  return url;
}

export const isURLSearchParams = (val) => {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
export const isDate = (val) => {
  return toString.call(val) === '[object Date]';
}
export const isObject = (val) => {
  return val !== null && typeof val === 'object';
}