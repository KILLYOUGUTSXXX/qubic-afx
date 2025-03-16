import MenuJSON from '@afx/mock-datas/menus.json'
import Icons from '../Others/icon.layout'
import './style.scss'
import Link from 'next/link'
import Text from '../Others/text.layout'
import { usePathname } from 'next/navigation'
import { Grid } from 'antd'
interface ISidebar {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
  onChangeMenu?: (payload: { id: string; name: string; path: string }) => void
  onLogout: () => void
}

export default function Sidebar(props: ISidebar) {
  const pathname = usePathname() || ''
  const breakpoint = Grid.useBreakpoint()

  return (
    <div
      className={`${!breakpoint.sm ? 'mv' : ''} sidebar h-full flex-col flex ${props.collapsed ? 'collapsed' : ''}`}
    >
      {/* Head */}
      <div
        className={`relative flex flex-row items-center px-2 py-4 gap-x-2 header bg-base-color dark:bg-dark-color ${props.collapsed ? 'collapsed' : ''}`}
      >
        <Icons type="AppstoreOutlined" size={32} />
        {!props.collapsed && (
          <Text className="text-[20px] font-semibold">Qubic</Text>
        )}
        <a
          onClick={() => props.setCollapsed(!props.collapsed)}
          className={`navigation-toogle bg-white dark:bg-slate-800 !border-base-color dark:!border-light-color ${props.collapsed ? 'collapsed' : ''}`}
        >
          <Icons type="CaretRightOutlined" size={16} />
        </a>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col h-full pt-10 pb-4 content bg-white dark:bg-slate-800 ${props.collapsed ? 'collapsed' : ''}`}
      >
        {MenuJSON.map(a => (
          <Link
            href={a.path}
            className={`flex flex-row gap-2 align-middle items text-dark-color dark:text-light-color ${pathname.match(new RegExp(`^${a.path}\/?([0-9]+)?$`, 'g')) ? 'active' : ''}`}
            key={a.id}
          >
            <Icons type={a.icon} size={20} />
            {!props.collapsed && <p className="text-[14px]">{a.name}</p>}
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div
        className={`flex flex-col items-center px-2 py-6 gap-y-4 footer bg-base-color dark:bg-dark-color ${props.collapsed ? 'collapsed' : ''}`}
      >
        <a
          onClick={props.onLogout}
          className="cursor-pointer relative flex flex-row justify-between max-w-fit min-w-[55px] h-[40px] py-2 px-3 bg-red-400 rounded-4xl text-light-color"
        >
          {!props.collapsed && (
            <p className="w-[90px] font-semibold text-[14px]">Logout</p>
          )}
          <Icons
            type="LogoutOutlined"
            size={18}
            className="!text-red-500 dark:!text-red-500 bg-light-color w-[30px] h-[30px] border flex flex-row justify-center rounded-full right-1 top-1 absolute"
          />
        </a>
      </div>
    </div>
  )
}
