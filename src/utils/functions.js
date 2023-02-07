export const toKebabCase = (string) => {
  const strArr = string.split(" ")
  const kebabArr = strArr.reduce((acc, val) => {
    return acc.concat(val.toLowerCase())
  }, [])

  return kebabArr.join("-")
}

export const fromKebabToNormal = (string) => {
  const strArr = string.split("-")
  const norArr = strArr.reduce((acc, val) => {
    const capitalized = val.charAt(0).toUpperCase() + val.slice(1)
    return acc.concat(capitalized)
  }, [])

  return norArr.join(" ")
}
