export const fromHomeStore = (set) => ({
  isFromHome: false,
  setIsFromHome: (status) => {
    set((state) => ({
      isFromHome: status,
    }))
  },
})
