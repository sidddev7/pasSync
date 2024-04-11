"use client";

import { Button, Form, Input } from "antd";

export const LoginComponent = () => {
  const [form] = Form.useForm();
  return (
    <Form layout="vertical" className="flex flex-col gap-1">
       <InputForm/>
      <Form.Item label="Password" >
      <Input.Password />
      </Form.Item>
      <Button>Login</Button>
    </Form>
  );
};
