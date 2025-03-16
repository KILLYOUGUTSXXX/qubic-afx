import { Input, InputProps } from 'antd'

const defaultClasses =
  'bg-white shadow appearance-none border rounded w-full py-2 px-3 text-dark-color leading-tight focus:outline-none focus:shadow-outline border-base-color'

export default function InputText(props: InputProps) {
  return <Input className={`${defaultClasses} ${props.className}`} {...props} />
}
