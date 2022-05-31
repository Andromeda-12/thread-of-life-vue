import instance from './axiosConfig'

class userService {
  getUser = (id) => {
    return instance.get(`/users/${id}`)
  }


}

export default new userService()
