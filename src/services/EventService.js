import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage, page) {
    return apiClient.get('/event?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/event/' + id)
  },
  saveEvent(event) {
    return apiClient.post('/event', event)
  },
  getEventByKeyword(keyword, perPage, page) {
    return apiClient.get(
      'event?_limit=' + perPage + '&_page=' + page + '&title=' + keyword
    )
  },
  uploadFile(file) {
    let formData = new FormData()
    formData.append('file', file)
    return apiClient.post('/uploadFile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
