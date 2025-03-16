import { IDataPosts } from '@afx/interfaces/main/post.iface'
import request from '@afx/utilities/request.util'
import { RestConfig } from '@afx/utilities/rest.util'

export function getListPosts(userId: number) {
  return request<Array<IDataPosts>>({
    url: RestConfig.posts.main,
    method: 'GET',
    data: { userId }
  })
}
