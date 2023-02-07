import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import SearchItem from "../../components/SearchItem/SearchItem.component"
import { useSearchStore } from "../../stores"
import "./Search.view.css"

const Search = () => {
  const { query } = useParams()
  const getSearchResults = useSearchStore((state) => state.searchResults)
  const getFetchSearch = useSearchStore((state) => state.fetchSearch)

  useEffect(() => {
    getFetchSearch(query)
  }, [query])

  return (
    <div className="search">
      {getSearchResults.map((result) => (
        <SearchItem key={result.id} movie={result} />
      ))}
    </div>
  )
}

export default Search
