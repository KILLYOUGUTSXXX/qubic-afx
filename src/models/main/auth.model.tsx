import { IModelDefinitions } from "@afx/interfaces/global.iface";
import * as service from '@afx/services/auth.service'

export type IStateAuth = {
  data: string
}
export type IActionAuth = {
  onLogin: () => void
}

const AuthModel: IModelDefinitions<IStateAuth, IActionAuth> = {
  name: 'auth',
  model: (getStates, useActions) => ({
    state: {
      data: ''
    },
    actions: {
      async onLogin() {
        try {
          const result = await service.login()
          // await userSv.getListUsers()
        } catch (er: any) {
        }
      }
    }
  })
}

export default AuthModel