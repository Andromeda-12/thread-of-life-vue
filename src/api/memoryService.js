import instance from './axiosConfig'

const data = [
  {
    imageUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    title: 'Top western road trips ',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio in quisquam vel beatae optio nihil.',
  },
]

class memoryService {
  getMemories = (userId) => instance.get(`/users/${userId}/memories`)
  createMemory = (memory) => {
    console.log(memory);
    return instance.post('/memories/', memory)
  }
  getMemory = (memoryId) => instance.get(`/memories/${memoryId}`)
  deleteMemory = (memoryId) => instance.delete(`/memories/${memoryId}`)
  editMemory = (memory) => instance.put(`/memories/${memory.get('id')}`, memory)
}

export default new memoryService()
