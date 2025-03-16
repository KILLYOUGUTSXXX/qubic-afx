interface ISelectOption {
  defaultValue?: string
  value?: string
  options: Array<{ value: string; label: string }>
  className?: string
}
export default function SelectOption(props: ISelectOption) {
  return (
    <div className={props.className}>
      <select
        {...props}
        className="block cursor-pointer w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300"
      >
        {props.options.map(a => (
          <option value={a.value} key={a.value}>
            {a.label}
          </option>
        ))}
      </select>
    </div>
  )
}
