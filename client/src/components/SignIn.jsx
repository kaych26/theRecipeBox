import React, { Component } from 'react';
import '../styles/SignIn.css';

export default class SignIn extends Component {
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
      <div className="signon-outerframe">
        <div className="signon-form-frame">
          <form className="signon-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.handleLogin(this.state);
              this.props.history.push('/');
            }}>
            <h3 className="signon-title">Login</h3>
            <div className="signon-nameAndvalue">
              <label className="username" htmlFor="username">
                username:{' '}
              </label>
              <input
                className="signon-input"
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="signon-nameAndvalue">
              <label className="password" htmlFor="password">
                password:{' '}
              </label>
              <input
                className="signon-input"
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="signon-button-frame">
              <button className="signon-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
