"use client"

import { Button, Form, Input } from "antd"

export const LoginComponent=()=>{
    const [form]=Form.useForm()
    return <Form className="flex flex-col gap-1" >
    <Input/>
    <Input.Password/>
    <Button>Login</Button></Form>
}