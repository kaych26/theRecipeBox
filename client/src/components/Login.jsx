import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Hero from './Hero';
import '../styles/Login.css';

export default class Login extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <>
        <Hero />

        <div className="login-outerframe">
          <Link to="/register" className="register-link">
            Click here to Register
          </Link>

          <h3 className="login-form-title">Login</h3>

          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.handleLogin(this.state);
              this.props.history.push('/');
            }}
          >
            <div className="login-div">
              <label className="username" htmlFor="username">
                username: {' '}
              </label>
              <input
                className="login-input"
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>

            <div className="login-div">
              <label className="password" htmlFor="password">
                password:{' '}
              </label>
              <input
                className="login-input"
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>

            <div className="login-button-frame">
              <button className="login-button">Submit</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
