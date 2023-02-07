const API_KEY = import.meta.env.VITE_API_KEY

const lang = "language=en-US|id-ID"
const isAdult = "include_adult=false"
const dramaGenreCode = "18"
const animeGenreCode = "16"
const viuCode = "3547|3174"
const animeCode = "210024|287501"
const page = "page=1"

const requests = {
  fetchTrendings: `/trending/all/week?api_key=${API_KEY}&${lang}&with_networks=${viuCode}&${isAdult}`,
  fetchViuOriginals: `/discover/tv?api_key=${API_KEY}&${lang}&${page}&with_networks=${viuCode}&${isAdult}`,
  fetchViuOriginalsMovie: `/discover/movie?api_key=${API_KEY}&${lang}&${page}&with_networks=${viuCode}&${isAdult}`,
  fetchAnimeTv: `/discover/tv?api_key=${API_KEY}&${lang}&${page}&with_genres=${animeGenreCode}&with_keywords=${animeCode}&${isAdult}`,
  fetchAnimeMovie: `/discover/movie?api_key=${API_KEY}&${lang}&${page}&with_genres=${animeGenreCode}&with_keywords=${animeCode}&${isAdult}`,
  fetchDramaTv: `/discover/tv?api_key=${API_KEY}&${lang}&${page}&with_genres=${dramaGenreCode}&${isAdult}`,
  fetchDramaMovie: `/discover/movie?api_key=${API_KEY}&${lang}&${page}&with_genres=${dramaGenreCode}&${isAdult}`,
}

export const getRecommendations = (movieId, isMovie) => {
  const keywords = viuCode + animeCode
  const url = `/${
    isMovie ? "movie" : "tv"
  }/${movieId}/recommendations?api_key=${API_KEY}&${lang}&${page}&with_keywords=${keywords}&${isAdult}`

  return url
}

export const getSearch = (query) => {
  const keywords = viuCode + animeCode
  const url = `/search/multi?api_key=${API_KEY}&${lang}&${page}&query=${query}&with_keywords=${keywords}&${isAdult}`

  return url
}

export default requests
