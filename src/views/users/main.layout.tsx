/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLynxStore } from '@afx/models/engine/main.provider'
import { IActionUser, IStateUser } from '@afx/models/user.model'
import React, { useState } from 'react'
import BrowseUserLayout from './browse.layout'
import { IDataUsers } from '@afx/interfaces/main/user.iface'
import ModalView from '@afx/components/Modals/main.layout'
import UserDetailLayout from './layouts/user-detail.layout'
import { IActionPost, IStatePost } from '@afx/models/post.model'
import PostDetailLayout from './layouts/post-detail.layout'
import FilterUserLayout from './filter.layout'

export default function UserLayout(): React.JSX.Element {
  const [filterData, setFilterData] = useState<{
    key: string
    value: string
  }>({ key: 'name', value: '' })
  const {
    state,
    isLoading,
    useActions: UseActions
  } = useLynxStore<IStateUser, IActionUser>('user')

  const {
    state: statePost,
    isLoading: loadingPost,
    useActions: ActionPost
  } = useLynxStore<IStatePost, IActionPost>('post')

  const LOADING_POSTS = loadingPost('onGetListPosts') || false
  const LOADINGS = isLoading('onGetListUsers') || false
  const LOADING_DETAIL = isLoading('onGetCurrentUser') || false

  const onSeekDetail = (record: IDataUsers) => {
    UseActions<'updateState'>('updateState', [{ showDetail: true }])
    UseActions<'onGetCurrentUser'>('onGetCurrentUser', [record.id], true)
  }
  const onCloseDetail = () => {
    UseActions<'updateState'>('updateState', [
      { currentUser: undefined, showDetail: false }
    ])
  }

  const onShowPost = (userId: number) => {
    ActionPost<'updateState'>('updateState', [{ showPost: true }])
    ActionPost<'onGetListPosts'>('onGetListPosts', [userId], true)
  }
  const onClosePost = () => {
    ActionPost<'updateState'>('updateState', [
      { listPost: [], showPost: false }
    ])
  }

  const onSubmitData = (data: IDataUsers, resetFields: () => void) => {
    resetFields()
    onCloseDetail()
  }
  return (
    <div className="flex flex-col gap-3">
      <ModalView
        title="User Detail"
        open={state.showDetail}
        width={750}
        onClose={onCloseDetail}
      >
        <UserDetailLayout
          onSubmitData={onSubmitData}
          LOADINGS={LOADING_DETAIL}
          data={state.currentUser}
        />
      </ModalView>

      <ModalView
        title="List Post's"
        open={statePost.showPost}
        width={500}
        onClose={onClosePost}
      >
        <PostDetailLayout LOADINGS={LOADING_POSTS} data={statePost.listPost} />
      </ModalView>

      <div className="flex flex-col gap-3">
        <FilterUserLayout onChangeFilter={v => setFilterData(v)} />
        <BrowseUserLayout
          onShowPost={onShowPost}
          onSeekDetail={onSeekDetail}
          LOADINGS={LOADINGS}
          dataSources={state.listUser.filter(
            (a: any) =>
              (a[filterData?.key] as string)
                ?.toLowerCase?.()
                .indexOf?.(filterData?.value?.toLowerCase?.() as string) !== -1
          )}
        />
      </div>
    </div>
  )
}
