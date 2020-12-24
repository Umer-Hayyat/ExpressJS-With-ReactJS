import React, { useState } from "react";
import { axiosPost } from "../Helpers/AxiosHelper";
import { setAccessToken } from "../Helpers/AuthHelper";
import { Row, Form, Input, Button, Checkbox, message } from "antd";

const tailLayout = {
  wrapperCol: { offset: 11 },
};

const Login = (props) => {
  const onFinish = (values) => {
    axiosPost("/GetToken", values)
      .then(({ data: { accessToken } }) => setAccessToken(accessToken))
      .then(() => {
        props.history.push("/users/all");
      })
      .catch(() => {
        message.error("Server encountered some errors");
      });
  };

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        scrollToFirstError={true}
        validateStatus="error"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: "Please input your username!" },
            { type: "email", message: "invalid email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 5, message: "minimum 5 character" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default Login;
