import React from 'react';
import { openOptionsPage } from "../../lib/brower";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Image } from 'antd';

export default function Popup({ }) {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    openOptionsPage();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '30px' }}>
      <div style={{ maxWidth: 250, textAlign: 'center' }}>
        <img src={require('../../assets/logo.png').default} alt="logo" style={{ width: 215, height: 60, marginBottom: 20 }} />
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          {/* <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item> */}

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            {/* or <a href="">Register now!</a> */}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
