
export const loginApi = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        isLoading: false,
        isLoaded: true,
        data: {}
      })
    } ,1000)
  })
}