import SimpleListView from '@afx/components/Lists/main.layout'
import Spinner from '@afx/components/Others/spinner/main.layout'
import SimpleTable from '@afx/components/Table/main.layout'
import { IDataUsers } from '@afx/interfaces/main/user.iface'
import { Button, Grid } from 'antd'
import React from 'react'

interface IBrowseUserLayout {
  dataSources: Array<IDataUsers>
  LOADINGS: boolean
  onSeekDetail: (record: IDataUsers, index: number) => void
  onShowPost: (userId: number, record: IDataUsers) => void
}

export default function BrowseUserLayout(
  props: IBrowseUserLayout
): React.JSX.Element {
  const breakpoint = Grid.useBreakpoint()

  return (
    <div className="flex flex-col gap-3">
      {props.LOADINGS && (
        <div className="flex flex-row items-center justify-end px-3 w-full gap-x-2 text-stone-700 font-semibold italic">
          <p className="text-base-color dark:text-light-color">{`Collect data's`}</p>
          <Spinner />
        </div>
      )}
      {!breakpoint.sm && (
        <SimpleListView
          onClickItem={props.onSeekDetail}
          dataSources={props.dataSources}
          renderItem={{
            title: record => record.name,
            description: record => record.email,
            extra: record => (
              <Button
                size="small"
                onClick={v => {
                  props.onShowPost(record.id, record)
                  return v.stopPropagation()
                }}
              >
                {"List Post's"}
              </Button>
            )
          }}
        />
      )}
      {breakpoint.sm && (
        <SimpleTable
          name="user-table"
          onRowClick={props.onSeekDetail}
          dataSources={props.dataSources}
          columns={[
            {
              key: 'sequence',
              render(_, index) {
                return <p>{index + 1}</p>
              },
              title: 'No'
            },
            {
              key: 'name',
              showSort: true,
              dataIndex: 'name',
              title: 'Name'
            },
            {
              key: 'username',
              showSort: true,
              dataIndex: 'username',
              title: 'User Name'
            },
            {
              key: 'email',
              showSort: true,
              dataIndex: 'email',
              title: 'Email'
            },
            {
              key: 'phone',
              showSort: true,
              dataIndex: 'phone',
              title: 'Phone Number'
            },
            {
              key: 'website',
              showSort: true,
              dataIndex: 'website',
              title: 'Website'
            },
            {
              key: 'company',
              title: 'Company',
              render(record) {
                return record.company.name
              }
            },
            {
              key: 'seek_post',
              title: 'Seek Post',
              render(record) {
                return (
                  <Button
                    size="small"
                    onClick={v => {
                      props.onShowPost(record.id, record)
                      return v.stopPropagation()
                    }}
                  >
                    {"List Post's"}
                  </Button>
                )
              }
            }
          ]}
        />
      )}
    </div>
  )
}
