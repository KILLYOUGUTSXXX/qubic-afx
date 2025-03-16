/* eslint-disable @typescript-eslint/no-explicit-any */

import { QuestionOutlined } from '@ant-design/icons'

/* eslint-disable @typescript-eslint/no-require-imports */
interface IconCustom {
  type: string
  style?: React.CSSProperties
  size: number
  className?: string
  onClick?: (e?: any) => void
  noDefaultColor?: boolean
}

export default function Icons(props: IconCustom): React.JSX.Element {
  const Icon: any = require('@ant-design/icons/es/icons')[props.type]
  let className = props.className
  if (!props.noDefaultColor)
    className = `!text-dark-color dark:!text-light-color ${props.className || ''}`

  if (!Icon) return <QuestionOutlined {...props} className={className} />
  return (
    <Icon
      onClick={typeof props.onClick === 'function' ? props.onClick : null}
      style={{ fontSize: props.size, ...props.style }}
      className={className}
    />
  )
}
