import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { fromHomeStore } from "./modules/fromHome"
import { fetchUrlStore } from "./modules/fetchUrl"
import { likedMoviesStore } from "./modules/likedMovies"
import { trailersStore } from "./modules/trailers"
import { isWatchTrailerStore } from "./modules/isWatchTrailer"
import { similarsStore } from "./modules/similars"
import { searchStore } from "./modules/search"
import { sidenavStore } from "./modules/sidenav"

const fromHomeStoreDev = devtools(fromHomeStore)
const fetchUrlStoreDev = devtools(fetchUrlStore)
const likedMoviesStoreDev = devtools(
  persist(likedMoviesStore, { name: "liked_movies" })
)
const trailersStoreDev = devtools(trailersStore)
const isWatchTrailerStoreDev = devtools(isWatchTrailerStore)
const similarsStoreDev = devtools(similarsStore)
const searchStoreDev = devtools(searchStore)
const sidenavStoreDev = devtools(sidenavStore)

export const useFromHomeStore = create(fromHomeStoreDev)
export const useFetchUrlStore = create(fetchUrlStoreDev)
export const useLikedMoviesStore = create(likedMoviesStoreDev)
export const useTrailerStore = create(trailersStoreDev)
export const useIsWatchTrailer = create(isWatchTrailerStoreDev)
export const useSimilarsStore = create(similarsStoreDev)
export const useSearchStore = create(searchStoreDev)
export const useSidenavStore = create(sidenavStoreDev)
