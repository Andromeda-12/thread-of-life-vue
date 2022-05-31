import instance from './axiosConfig'

class authService {
  register = (credential) => {
    console.log(credential);
    return instance.post('/auth/registration/', credential)
  }
  obtain = (credential) => 
  {
    console.log(credential);
    return instance.post('/auth/login/', credential)
  }
  // refreshToken = (refresh) => instance.post('/auth/token/refresh/', refresh)
}

export default new authService()
