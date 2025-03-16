import { useEffect, useState } from 'react'
import Switch from '../Inputs/switch/main.layout'
import './style.scss'
import { Button, Grid } from 'antd'
import Icons from '../Others/icon.layout'

interface IHeader {
  setCollapsed: () => void
}
export default function Header(props: IHeader) {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const breakpoint = Grid.useBreakpoint()

  const toogleViewMode = (isDark: boolean) => {
    setDarkMode(isDark)
    localStorage.setItem('dark-mode', isDark ? '1' : '0')
  }

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  useEffect(() => {
    const saveDarkMode = localStorage.getItem('dark-mode')
    setDarkMode(!!(saveDarkMode === '1'))
  }, [])

  return (
    <div className="header-db flex flex-row justify-between bg-base-color dark:bg-dark-color">
      {!breakpoint.sm ? (
        <Button shape="round" onClick={() => props.setCollapsed()}>
          <Icons type="MenuOutlined" size={16} />
        </Button>
      ) : (
        <span />
      )}
      <Switch checked={darkMode} onChange={toogleViewMode} />
    </div>
  )
}
