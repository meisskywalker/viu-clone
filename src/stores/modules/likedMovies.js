export const likedMoviesStore = (set) => ({
  movies: [],
  addLikedMovie: (movie) => {
    set((state) => ({
      movies: [...state.movies, movie],
    }))
  },
  removeLikedMovie: (value) => {
    set((state) => ({
      movies: state.movies.filter((movie) => movie.id !== value.id),
    }))
  },
})
