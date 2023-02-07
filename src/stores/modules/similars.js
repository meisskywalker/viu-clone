import axios from "../../utils/axios"
import { getRecommendations } from "../../utils/requests"

export const similarsStore = (set) => ({
  similars: [],
  fetchSimilars: async (movieId, isMovie = false) => {
    const url = getRecommendations(movieId, isMovie)
    const response = await axios.get(url)
    const results = await response.data.results

    set({ similars: results.map((similar) => similar) })
  },
})
