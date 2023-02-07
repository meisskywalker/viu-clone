export const fetchUrlStore = (set) => ({
  url: "",
  setUrl: (url) => {
    set((state) => ({
      url: url,
    }))
  },
})
