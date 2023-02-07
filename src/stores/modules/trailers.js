import axios from "../../utils/axios"

export const trailersStore = (set) => ({
  trailers: [],
  fetchTrailers: async (movieId, isMovie = false) => {
    const url = `/${isMovie ? "movie" : "tv"
      }/${movieId}/videos?api_key=${import.meta.env.VITE_API_KEY}`
    const response = await axios.get(url)
    const results = await response.data.results

    set({ trailers: results.map((trailer) => trailer) })
  },
})
