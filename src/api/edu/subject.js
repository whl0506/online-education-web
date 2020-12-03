import request from '@/utils/request'

const api_name = '/admin/edu/subject'
export default {
  getNestedTreeList() {
    return request({
      url: `${api_name}`,
      method: 'get'
    })
  },
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },
  saveSubject(subject) {
    return request({
      url: `${api_name}/save `,
      method: 'post',
      data: subject
    })
  }
}
