import store from '@/store'
import instance from './axiosConfig'

export default function setup() {
  instance.interceptors.request.use(
    function (config) {
      const token = store.state.authModule.token

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  // instance.interceptors.response.use(
  //   async function (error) {
  //     const originalRequest = error.config
  //     if (
  //       error.response.status === 401 &&
  //       originalRequest.url.includes('/auth/token/refresh/')
  //     ) {
  //       store.commit(`auth/${LOGOUT}`)
  //       router.push({ name: SIGN_IN_ROUTE })
  //       return Promise.reject(error)
  //     } else if (error.response.status === 401 && !originalRequest._retry) {
  //       originalRequest._retry = true
  //       await store.dispatch(`auth/${REFRESH_ACTION}`)
  //       return instance(originalRequest)
  //     }
  //     return Promise.reject(error)
  //   }
  // )
}
