
import request from "@afx/utilities/request.util";
import { RestConfig } from "@afx/utilities/rest.util";


export function login() {
  return request({
    url: RestConfig.auth.login,
    method: 'POST',
    data: {
      username: 'aidil',
      password: 'jungle001'
    }
  })
}