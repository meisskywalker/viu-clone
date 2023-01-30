const API_KEY = import.meta.env.VITE_API_KEY

const requests = {
  fetchTrendings: `/trending/all/week?api_key=${API_KEY}&language=en-US|id-ID&with_networks=3547|3174`,
  fetchViuOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US|id-ID&page=1&with_networks=3547|3174`,
  fetchAnimeTv: `/discover/tv?api_key=${API_KEY}&language=en-US|id-ID&page=1&with_genres=16&with_keywords=210024|287501`,
  fetchAnimeMovie: `/discover/movie?api_key=${API_KEY}&language=en-US|id-ID&page=1&with_genres=16&with_keywords=210024|287501`,
  fetchDramaTv: `/discover/tv?api_key=${API_KEY}&language=en-US|id-ID&page=1&with_genres=18`,
  fetchDramaMovie: `/discover/movie?api_key=${API_KEY}&language=en-US|id-ID&page=1&with_genres=18`
}

export default requests
