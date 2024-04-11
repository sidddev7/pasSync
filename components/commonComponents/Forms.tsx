import { Form, FormItemProps, Input, InputProps } from 'antd'
import React from 'react'

export const InputForm = (props:FormItemProps & InputProps) => {
  return (
    <Form.Item  {...props}>
    <Input {...props} />
    </Form.Item>
  )
}
