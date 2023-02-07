export const isWatchTrailerStore = (set) => ({
  isWatch: false,
  index: 0,
  isWatching: (condition) => {
    set((state) => ({
      isWatch: condition,
    }))
  },
  setIndex: (idx) => {
    set((state) => ({
      index: idx,
    }))
  },
})
