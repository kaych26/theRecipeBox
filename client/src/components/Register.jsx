import React, { Component } from 'react';
import '../styles/Register.css';

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
      <div className="register-outerframe">
        <div className="register-form-frame">
          <form className="register-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.handleLogin(this.state);
              this.props.history.push('/');
            }}>
            <h3 className="register-title">Register</h3>
            <div className="register-nameAndvalue">
              <label className="register_username" htmlFor="username">
                username:{' '}
              </label>
              <input
                className="register-input"
                id="register-username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="register-nameAndvalue">
              <label className="register-email" htmlFor="email">
                email:{' '}
              </label>
              <input
                className="register-input"
                id="register-email"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="register-nameAndvalue">
              <label className="register_password" htmlFor="password">
                password:{' '}
              </label>
              <input
                className="register-input"
                id="register-password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="register-button-frame">
              <button className="register-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
