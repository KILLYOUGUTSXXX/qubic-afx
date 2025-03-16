import { FormItemProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import Text from '../Others/text.layout'

export default function CustomFormItem(props: FormItemProps) {
  return (
    <FormItem {...props} label={<Text>{props.label as string}</Text>}>
      {props.children}
    </FormItem>
  )
}
