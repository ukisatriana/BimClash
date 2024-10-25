import React from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from "antd";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn, showAuthMessage, showLoading, hideAuthMessage } from 'store/slices/authSlice';

const LoginForm = ({ signIn, loading }) => {
  const onFinish = (values) => {
    signIn(values);
  };

  return (
    <>
      <Form layout="vertical" name="login-form" onFinish={onFinish}>
        <Form.Item 
          name="email" 
          label="Email" 
          rules={[
            { 
              required: true,
              message: 'Please input your email address'
            },
            { 
              type: 'email',
              message: 'Please enter a valid email!'
            }
          ]}
        >
          <Input prefix={<MailOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item 
          name="password" 
          label="Password" 
          rules={[
            { 
              required: true,
              message: 'Please input your password',
            }
          ]}
        >
          <Input.Password prefix={<LockOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

LoginForm.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = ({ auth }) => {
  const { loading } = auth;
  return { loading };
};

const mapDispatchToProps = {
  signIn,
  showAuthMessage,
  showLoading,
  hideAuthMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);