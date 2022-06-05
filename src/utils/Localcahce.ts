class Cache {
  setitem(key: string, val: any) {
    window.localStorage.setItem(key, JSON.stringify(val))
  }

  getitem(key: string) {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteitem(key: string) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}

export default new Cache()
