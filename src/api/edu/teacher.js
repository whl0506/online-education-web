import request from '@/utils/request'

const api_name = '/admin/edu/teacher'
export default {
  getPageList(page,limit,searchObj) {
    return request({
      url: `${api_name}/page/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  removeById(teacherId) {
    return request({
      url: `${api_name}/delete/${teacherId}`,
      method: 'delete'
    })
  },
  save(teacher) {
    return request({
      url: `${api_name}/add_or_update`,
      method: 'post',
      data: teacher
    })
  },
  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },
  updateById(teacher) {
    return request({
      url: `${api_name}/add_or_update`,
      method: 'post',
      data: teacher
    })
  }
}
