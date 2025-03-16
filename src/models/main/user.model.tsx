/* eslint-disable @typescript-eslint/no-explicit-any */
import { IModelDefinitions } from '@afx/interfaces/global.iface'
import { IDataUsers } from '@afx/interfaces/main/user.iface'
import * as service from '@afx/services/users.service'

export type IStateUser = {
  listUser: Array<IDataUsers>
  currentUser?: IDataUsers
  showDetail: boolean
}
export type IActionUser = {
  onGetListUsers: () => void
  onGetCurrentUser: (userId: number) => void
  updateState: (payload: Partial<IStateUser>) => void
}

const UserModel: IModelDefinitions<IStateUser, IActionUser> = {
  name: 'user',
  subscriptions:
    (_, useActions) =>
    ({ pathname }) => {
      if (pathname === '/portal/users')
        useActions('user')('onGetListUsers', [], true)

      if (pathname.match(/^\/portal\/users\/[0-9]+$/g)) {
        useActions('user')('onGetListUsers', [], true)
        const userId = parseInt(pathname.replace(/^\/portal\/users\/+/g, ''))
        useActions('user')('onGetCurrentUser', [userId])
        useActions('user')('updateState', [{ showDetail: true }])
      }
    },
  model: put => ({
    state: {
      showDetail: false,
      listUser: [],
      currentUser: undefined
    },
    actions: {
      async onGetListUsers() {
        try {
          const result = await service.getListUsers()

          return put({
            listUser: result
          })
        } catch (er: any) {
          return er
        }
      },
      async onGetCurrentUser(userId: number) {
        try {
          const [result] = await service.getListUsers(userId)

          return put({
            currentUser: result
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

export default UserModel
