import CustomFormItem from '@afx/components/Forms/form-item.layout'
import { CustomForm } from '@afx/components/Forms/form.layout'
import InputText from '@afx/components/Inputs/input/main.layout'
import Text from '@afx/components/Others/text.layout'
import { IDataUsers } from '@afx/interfaces/main/user.iface'
import {
  Button,
  Col,
  Divider,
  Flex,
  Form,
  notification,
  Row,
  Skeleton
} from 'antd'
import TextArea from 'antd/es/input/TextArea'

interface IUserDetailLayout {
  data?: IDataUsers
  LOADINGS: boolean
  onSubmitData: (data: IDataUsers, resetFields: () => void) => void
}

export default function UserDetailLayout(props: IUserDetailLayout) {
  const [formProps] = Form.useForm()

  const submitData = () => {
    return formProps
      .validateFields()
      .then(value => {
        return props.onSubmitData(value, formProps.resetFields)
      })
      .catch(() =>
        notification.warning({
          message: 'Validation Failed',
          description: 'Make sure your input fields.'
        })
      )
  }

  return (
    <Flex gap={8} vertical>
      {props.LOADINGS && <Skeleton active />}
      {!props.LOADINGS && (
        <>
          <CustomForm
            form={formProps}
            initialValues={props.data || {}}
            dependencies={[props.data?.id]}
            wrapperCol={{ span: 24 }}
            labelCol={{ span: 24 }}
          >
            <Row gutter={12}>
              <Col xxl={8} xl={8} lg={12} md={12} xs={12} sm={12}>
                <CustomFormItem label="Name" name="name">
                  <InputText size="large" />
                </CustomFormItem>
              </Col>
              <Col xxl={8} xl={8} lg={12} md={12} xs={12} sm={12}>
                <CustomFormItem label="Username" name="username">
                  <InputText size="large" />
                </CustomFormItem>
              </Col>
              <Col xxl={8} xl={8} lg={12} md={12} xs={12} sm={12}>
                <CustomFormItem label="Email" name="email">
                  <InputText size="large" />
                </CustomFormItem>
              </Col>
              <Col xxl={8} xl={8} lg={12} md={12} xs={12} sm={12}>
                <CustomFormItem label="Phone" name="phone">
                  <InputText size="large" />
                </CustomFormItem>
              </Col>
              <Col xxl={8} xl={8} lg={12} md={12} xs={24} sm={24}>
                <CustomFormItem label="Website" name="website">
                  <InputText size="large" />
                </CustomFormItem>
              </Col>

              <Divider orientation="left" orientationMargin={0}>
                <Text>Company Information :</Text>
              </Divider>
              <Col xxl={12} xl={12} lg={12} md={12} xs={24} sm={24}>
                <CustomFormItem name={['company', 'name']} label="Name">
                  <InputText size="large" />
                </CustomFormItem>
              </Col>
              <Col xxl={12} xl={12} lg={12} md={12} xs={24} sm={24}>
                <CustomFormItem
                  name={['company', 'catchPhrase']}
                  label="Catch Phrase"
                >
                  <InputText size="large" />
                </CustomFormItem>
              </Col>
              <Col xxl={16} xl={16} lg={20} md={24} xs={24} sm={24}>
                <CustomFormItem
                  name={['company', 'bs']}
                  label="Business Segment"
                >
                  <TextArea size="large" />
                </CustomFormItem>
              </Col>

              <Divider orientation="left" orientationMargin={0}>
                <Text>Address Information :</Text>
              </Divider>
              <Col xxl={8} xl={8} lg={12} md={12} xs={12} sm={12}>
                <CustomFormItem name={['address', 'street']} label="Street">
                  <InputText size="large" />
                </CustomFormItem>
              </Col>
              <Col xxl={8} xl={8} lg={12} md={12} xs={12} sm={12}>
                <CustomFormItem name={['address', 'suite']} label="Suite">
                  <InputText size="large" />
                </CustomFormItem>
              </Col>
              <Col xxl={8} xl={8} lg={16} md={16} xs={16} sm={16}>
                <CustomFormItem name={['address', 'city']} label="City">
                  <InputText size="large" />
                </CustomFormItem>
              </Col>
              <Col span={8}>
                <CustomFormItem name={['address', 'zipcode']} label="Zip Code">
                  <InputText size="large" />
                </CustomFormItem>
              </Col>
              <Col xxl={8} xl={8} lg={8} md={8} xs={12} sm={12}>
                <CustomFormItem name={['address', 'lat']} label="Latitude">
                  <InputText size="large" />
                </CustomFormItem>
              </Col>
              <Col xxl={8} xl={8} lg={8} md={8} xs={12} sm={12}>
                <CustomFormItem name={['address', 'lng']} label="Longitude">
                  <InputText size="large" />
                </CustomFormItem>
              </Col>
            </Row>
          </CustomForm>
          <Flex className="w-full" justify="end">
            <Button onClick={submitData} type="primary" size="large">
              Submit
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  )
}
