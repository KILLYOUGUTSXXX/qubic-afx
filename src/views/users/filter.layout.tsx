import CustomFormItem from '@afx/components/Forms/form-item.layout'
import { CustomForm } from '@afx/components/Forms/form.layout'
import InputText from '@afx/components/Inputs/input/main.layout'
import SelectOption from '@afx/components/Inputs/select/main.layout'
import { Col, Flex, Form, Row } from 'antd'

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
      <Row>
        <Col xxl={6} xl={7} lg={8} md={8} sm={24} xs={24}>
          <CustomFormItem name="key" className="!my-0 bg-red-200" colon={false}>
            <SelectOption
              options={[
                { label: 'Name', value: 'name' },
                { label: 'Username', value: 'username' },
                { label: 'Email', value: 'email' }
              ]}
            />
          </CustomFormItem>
        </Col>
        <Col xxl={8} xl={9} lg={10} md={10} sm={24} xs={24}>
          <CustomFormItem name="value" className="!my-0" colon={false}>
            <InputText size="large" />
          </CustomFormItem>
        </Col>
      </Row>
    </CustomForm>
  )
}
