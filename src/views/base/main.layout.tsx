'use client'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import './style.scss'
import Sidebar from '@afx/components/Layouts/sidebar.layout'
import Header from '@afx/components/Layouts/header.layout'
import { Grid } from 'antd'
import { signOut } from 'next-auth/react'
import '@ant-design/v5-patch-for-react-19'

export default function BaseLayout(
  props: PropsWithChildren
): React.JSX.Element {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const breakpoint = Grid.useBreakpoint()

  useEffect(() => {
    setCollapsed(!breakpoint.sm)
  }, [breakpoint.sm])

  const onLogout = () => {
    localStorage.removeItem('utoken')
    signOut()
    // return route.replace('/login')
  }

  return (
    <div className="flex flex-row h-[100dvh] w-[100dvw] overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        onLogout={onLogout}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <div className="flex flex-col w-full h-full">
        <Header setCollapsed={() => setCollapsed(!collapsed)} />
        {/* Content */}
        <div className="content-db dark:!bg-zinc-600 h-full">
          {props.children}
        </div>
      </div>
    </div>
  )
}
