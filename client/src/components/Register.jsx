import React, { Component } from 'react';
import '../styles/Login.css';

export default class Register extends Component {
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
        <div className="login-outerframe">
          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.handleRegister(this.state);
              this.props.history.push('/');
            }}
          >
            <h3 className="login-form-title">Register</h3>
            <div className="login-div">
              <label className="username" htmlFor="username">
                username:{' '}
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
              <label className="email" htmlFor="email">
                email:{' '}
              </label>
              <input
                className="login-input"
                id="email"
                type="text"
                name="email"
                value={email}
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
