export const likedMoviesStore = (set) => ({
  movies: [],
  addLikedMovie: (movie_id) => {
    set((state) => ({
      movies: [...state.movies, movie_id],
    }))
  },
  removeLikedMovie: (movie_id) => {
    set((state) => ({
      movies: state.movies.filter((movie) => movie !== movie_id),
    }))
  },
})
