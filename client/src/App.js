import React, { Component } from 'react';
import { withRouter } from 'react-router';

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/api-helper';

import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Main from './components/Main';
import Hero from './components/Hero';

class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    this.confirmUser();
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  };

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  };

  confirmUser = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      currentUser: null,
    });
    removeToken();
    this.props.history.push('/');
  };

  render() {
    return (
      <>
        <GlobalStyle />

        <Header
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Main
          handleRegister={this.handleRegister}
          handleLogin={this.handleLogin}
        />
      </>
      // {<div className="App">
      //   <Header
      //     handleLogout={this.handleLogout}
      //     currentUser={this.state.currentUser}
      //   />
      //   <Main
      //     handleRegister={this.handleRegister}
      //     handleLogin={this.handleLogin}
      //   />
      // </div> }
    );
  }
}

export default withRouter(App);

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <Header />
//       <Hero />
//       <h1>hello</h1>
//       <h1>world</h1>
//     </>
//   );
// }

// export default App;
