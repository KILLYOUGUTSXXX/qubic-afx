import './style.scss'

interface ISwitch {
  defaultChecked?: boolean
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export default function Switch(props: ISwitch) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={(v) => props.onChange?.(v.target.checked)}
        checked={props.checked}
        defaultChecked={props.defaultChecked}
      />
      <span className="slider" />
    </label>
  )
}