/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './style.scss'
import { Divider, Flex } from 'antd'

interface IListView<T extends Record<string, any>, K extends keyof T> {
  dataSources: Array<T>
  onClickItem?: (record: T, index: number) => void
  renderItem: {
    title: (
      record: T,
      index: number
    ) => T[K] | React.ReactNode | React.JSX.Element
    description: (
      record: T,
      index: number
    ) => T[K] | React.ReactNode | React.JSX.Element
    extra: (
      record: T,
      index: number
    ) => T[K] | React.ReactNode | React.JSX.Element
  }
}
export default function SimpleListView<
  T extends Record<string, any>,
  K extends keyof T
>(props: IListView<T, K>) {
  return (
    <Flex vertical gap={3}>
      {props.dataSources.map((a, idx: number) => (
        <>
          <a
            key={a.id}
            onClick={v => {
              props.onClickItem?.(a, idx)
              return v.stopPropagation()
            }}
          >
            <Flex
              justify="space-between"
              align="flex-start"
              gap={2}
              className="w-full"
            >
              <Flex vertical gap={2}>
                <div className="text-stone-700 dark:text-light-color font-semibold text-[1em] truncate w-[67.5vw]">
                  {props.renderItem.title(a, idx)}
                </div>
                <div className="text-stone-700 dark:text-light-color text-[.85em] truncate w-[67.5vw]">
                  {props.renderItem.description(a, idx)}
                </div>
              </Flex>
              <Flex className="">
                <div>{props.renderItem.extra(a, idx)}</div>
              </Flex>
            </Flex>
          </a>
          <Divider className="!my-2" />
        </>
      ))}
    </Flex>
  )
}
