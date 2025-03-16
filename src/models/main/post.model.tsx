/* eslint-disable @typescript-eslint/no-explicit-any */
import { IModelDefinitions } from '@afx/interfaces/global.iface'
import { IDataPosts } from '@afx/interfaces/main/post.iface'
import * as service from '@afx/services/posts.service'

export type IStatePost = {
  listPost: Array<IDataPosts>
  showPost: boolean
}
export type IActionPost = {
  onGetListPosts: (userId: number) => void
  updateState: (payload: Partial<IStatePost>) => void
}

const PostModel: IModelDefinitions<IStatePost, IActionPost> = {
  name: 'post',
  model: put => ({
    state: {
      showPost: false,
      listPost: []
    },
    actions: {
      async onGetListPosts(userId) {
        try {
          const result = await service.getListPosts(userId)

          return put({
            listPost: result
          })
        } catch (er: any) {
          return er
        }
      },
      updateState(payload) {
        put(payload)
      }
    }
  })
}

export default PostModel
