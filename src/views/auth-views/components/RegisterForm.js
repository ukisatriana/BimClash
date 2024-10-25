import React from 'react'
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from "antd";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const rules = {
	email: [
		{ 
			required: true,
			message: 'Please input your email address'
		},
		{ 
			type: 'email',
			message: 'Please enter a validate email!'
		}
	],
	password: [
		{ 
			required: true,
			message: 'Please input your password'
		}
	]
}

class RegisterForm extends React.Component {

state = {
	email: '',
	password: ''
}

handleChangeText = (e) => {
	this.setState({
		[e.target.id]: e.target.value,
	})
}

handleRegisterSubmit = () => {
	// console.log('email', this.state.email)
	// console.log('password', this.state.password)

	const {email, password} = this.state;
	// console.log('data kirim', email, password)

		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed up 
			const user = userCredential.user;

			// console.log('user', user)
			// console.log('userCredential', userCredential)
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;

			// console.log('errorMes', errorMessage)
			// console.log('errorCode', errorCode)
			// ..
		});

}

render() {
		return (
			<>
				<Form layout="vertical" name="register-form" 
				// onFinish={onSignUp}
				>
					<Form.Item 
						name="email" 
						label="Email" 
						rules={rules.email}
						hasFeedback
					>
						<Input 
						id='email'
						onChange={this.handleChangeText}
						prefix={<MailOutlined className="text-primary" />}
						/>
					</Form.Item>
					<Form.Item 
						name="password" 
						label="Password" 
						rules={rules.password}
						hasFeedback
					>
						<Input.Password 
						id='password'
						onChange={this.handleChangeText}
						prefix={<LockOutlined className="text-primary" />}
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" block 
						// loading={loading} 
						onClick={this.handleRegisterSubmit}
						>
							Sign Up
						</Button>
					</Form.Item>
				</Form>
			</>
		)
	}
}

export default RegisterForm
