const CONFIG = {
  API_BASE_PATH: 'https://api.themoviedb.org/3/',
  API_AUTH_KEY: 'fd02fbfbbe1a61bc406b87ca6d1852f1',
}

export const getUrlForRequest = (endpoint = '', page = 1) =>
  `${CONFIG.API_BASE_PATH}${endpoint}?api_key=${CONFIG.API_AUTH_KEY}&language=en-US&page=${page}`

export const getUrlForAsset = (asset, size) =>
  `https://image.tmdb.org/t/p/w${size}/${asset}`
