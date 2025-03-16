/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, FormProps } from 'antd'
import { useEffect } from 'react'

export function CustomForm(props: FormProps & { dependencies?: Array<any> }) {
  const { initialValues, ...others } = props
  useEffect(
    () => {
      props.form?.setFieldsValue(initialValues)
    },
    Array.isArray(props.dependencies) ? props.dependencies : [initialValues]
  )

  return <Form {...others}>{props.children as any}</Form>
}
