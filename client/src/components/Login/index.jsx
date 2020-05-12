// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
// import styled from 'styled-components';

// export default function Login() {
//   const [username, name, email, password] = useState('');

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     name(value);
//     // this.setState({
//     //   [name]: value
//     // });
//   };
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    // debugger
    const { username, email, password } = this.state;
    return (
      <>
      <Link to="/register">register</Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLogin(this.state);
          this.props.history.push('/');
        }}
      >
        <h3>Login</h3>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="email">email:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="password">password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <br />
        <button>Submit</button>
        </form>
        </>
    );
  }
}
