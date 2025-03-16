import CustomFormItem from '@afx/components/Forms/form-item.layout'
import { CustomForm } from '@afx/components/Forms/form.layout'
import InputText from '@afx/components/Inputs/input/main.layout'
import SelectOption from '@afx/components/Inputs/select/main.layout'
import { Flex, Form } from 'antd'

export interface IFilterUserLayout {
  onChangeFilter: (payload: { key: string; value: string }) => void
}

export default function FilterUserLayout(props: IFilterUserLayout) {
  const [formFilter] = Form.useForm<{ key: string; value: string }>()

  return (
    <CustomForm
      onValuesChange={() => props.onChangeFilter(formFilter.getFieldsValue())}
      form={formFilter}
      initialValues={{
        key: 'name',
        value: ''
      }}
      dependencies={[]}
    >
      <Flex justify="end">
        <CustomFormItem name="key" className="!my-0" colon={false}>
          <SelectOption
            className="w-[200px]"
            options={[
              { label: 'Name', value: 'name' },
              { label: 'Username', value: 'username' },
              { label: 'Email', value: 'email' }
            ]}
          />
        </CustomFormItem>
        <CustomFormItem name="value" className="!my-0" colon={false}>
          <InputText className="w-[250px]" size="large" />
        </CustomFormItem>
      </Flex>
    </CustomForm>
  )
}
