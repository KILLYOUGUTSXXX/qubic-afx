/* eslint-disable @typescript-eslint/no-require-imports */
'use client'
import { useLynxModel } from '@afx/models/engine/registry.model'
import UserLayout from './main.layout'

export default function IndexUserLayout() {
  return useLynxModel(UserLayout, () => [
    require('@afx/models/user.model').default,
    require('@afx/models/post.model').default
  ])
}
