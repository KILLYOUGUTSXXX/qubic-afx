/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import Text from '../Others/text.layout'

import './style.scss'
import Icons from '../Others/icon.layout'

type Alignment = 'center' | 'left' | 'right'

export interface ISimpleTable<T, K extends keyof T> {
  name: string
  dataSources: T[]
  onRowClick?: (record: T, index: number) => void
  onChangeSortData?: (
    payload: Record<string, { mode: 1 | 2 | 0; key: string }>
  ) => void
  columns: Array<{
    showSort?: boolean
    colAlign?: Alignment
    align?: Alignment
    dataIndex?: K
    title: string
    key: string
    render?: (
      record: T,
      index: number
    ) => React.ReactNode | React.JSX.Element | string | number
  }>
}

export default function SimpleTable<T, K extends keyof T>(
  props: ISimpleTable<T, K>
): React.JSX.Element {
  const [_dataSources, setDataSources] = useState<Array<T>>([])
  const [indexSort, setIndexSort] = useState<
    Record<string, { mode: 1 | 2 | 0; key: string }>
  >({})

  const onClickSort = (key: any, dataIndex?: K) => {
    const curr = indexSort[key]
    let currMode = curr?.mode || 0
    if (currMode < 2) currMode += 1
    else currMode = 0

    const newData = {
      ...indexSort,
      [key]: {
        key: dataIndex,
        mode: currMode
      }
    }

    props.onChangeSortData?.(newData)
    return setIndexSort(newData)
  }

  useEffect(() => {
    const sortKey = Object.keys(indexSort)
    setDataSources(
      props.dataSources.sort((a, b) => {
        for (const key of sortKey) {
          const sortConfig = indexSort[key]
          if (!sortConfig) continue

          const valueA = (a || {})[sortConfig?.key]
          const valueB = (b || {})[sortConfig?.key]

          if (valueA === undefined || valueB === undefined) {
            if (valueA === undefined && valueB === undefined) continue
            return valueA === undefined ? 1 : -1
          }

          if (sortConfig.mode === 1) {
            // Descending
            if (valueA < valueB) return 1
            if (valueA > valueB) return -1
          } else if (sortConfig.mode === 2) {
            // Ascending
            if (valueA < valueB) return -1
            if (valueA > valueB) return 1
          }
        }
        return 0
      })
    )
  }, [props.dataSources, indexSort])

  return (
    <div className="relative overflow-x-auto rounded-md overflow-hidden">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-200">
          <tr>
            {props.columns.map(a => (
              <th key={a.key} scope="col" className="px-6 py-3">
                <div className="flex flex-row gap-x-2 items-center">
                  <Text>{a.title}</Text>
                  {a.showSort && (
                    <a
                      className="hover:cursor-pointer"
                      onClick={v => {
                        onClickSort(a.key, a.dataIndex)
                        v.stopPropagation()
                      }}
                    >
                      {!indexSort[a.key]?.mode && (
                        <Icons
                          type="SwapOutlined"
                          size={14}
                          className="rotate-90"
                        />
                      )}
                      {indexSort[a.key]?.mode === 1 && (
                        <Icons type="SortAscendingOutlined" size={14} />
                      )}
                      {indexSort[a.key]?.mode === 2 && (
                        <Icons type="SortDescendingOutlined" size={14} />
                      )}
                    </a>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {_dataSources.map((record, index) => (
            <tr
              onClick={() => props.onRowClick?.(record, index)}
              key={`row-${props.name}-${index}`}
              className="row-tables bg-white border-b dark:bg-gray-800 dark:border-gray-500 border-gray-200 dark:text-gray-200"
            >
              {props.columns.map(a => (
                <td
                  key={`row-${props.name}-${index}-${a.key}`}
                  className="px-6 py-4"
                >
                  {typeof a.render !== 'function' && (
                    <Text>
                      {(record as Record<string, any>)?.[a.dataIndex as string]}
                    </Text>
                  )}
                  {typeof a.render === 'function' && a.render(record, index)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
