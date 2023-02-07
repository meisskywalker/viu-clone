export const sidenavStore = (set) => ({
  isOpen: false,
  toggleSidenav: () => {
    set((state) => ({
      isOpen: !state.isOpen,
    }))
  },
})
