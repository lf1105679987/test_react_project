
import React, { Component } from 'react';
import { Button, Icon, Input } from 'antd'
import './index.less';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '@store/Login/actions';
import reducer from '@store/Login/reducer';
import injectReducer from '@utils/injectReducer';

injectReducer('login', reducer);
const mapStateToProps = (state) => {
	return {
		login: state.login,
		rootState: state,
	}
}
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
@connect(
	mapStateToProps,
	mapDispatchToProps
)
class Login extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			name: '',
			pwd: ''
		}
	}
	handleClick () {
		// const { loginAction } = this.props;
		const { name, pwd } = this.state;
		console.log(name, pwd);
		// loginAction()
	}
	handleChange (e, key) {
		this.setState({
			[key]: e.target.value
		})
	}
	render() {
		return (
			<main id="login-wrap">
				<section className="login-form">
					<Input
						className="user-input name-input"
						prefix={<Icon className="gray9" type="user" />}
						onChange={(e) => this.handleChange(e, 'name')}
						placeholder="Enter username"/>
					<Input
						className="user-input pwd-input"
						prefix={<Icon className="gray9" type="lock"/>}
						onChange={(e) => this.handleChange(e, 'pwd')}
						type="password" placeholder="Enter password"/>
					<Button className="login-btn"
						onClick={this.handleClick}
						htmlType="button">
						Login
					</Button>
				</section>
			</main>
		)
	}
}
export default Login;
