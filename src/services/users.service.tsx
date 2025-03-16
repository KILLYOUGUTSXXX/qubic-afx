import { IDataUsers } from '@afx/interfaces/main/user.iface'
import request from '@afx/utilities/request.util'
import { RestConfig } from '@afx/utilities/rest.util'

export function getListUsers(userId?: number) {
  return request<Array<IDataUsers>>({
    url: RestConfig.users.main,
    method: 'GET',
    data: typeof userId === 'number' ? { id: userId } : {}
  })
}
