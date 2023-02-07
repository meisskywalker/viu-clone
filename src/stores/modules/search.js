import axios from "../../utils/axios"
import { getSearch } from "../../utils/requests"

export const searchStore = (set) => ({
  searchResults: [],
  fetchSearch: async (query) => {
    const url =  getSearch(query)
      const response = await axios.get(url)
    const results = await response.data.results

    set({ searchResults: results.map((search) => search) })
  },
})
