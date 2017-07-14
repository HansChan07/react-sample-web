import React, { Component } from 'react';
import styled from 'styled-components';
import './global-styles';
import logo from './assets/images/securely-logo.svg';
import backgroundImage from './assets/images/bg.png';
import './App.css';

const AppWrapper = styled.div`
  background-image: url(${backgroundImage});
  height: 100vh;
  padding-top: 60px;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
`;

const Tagline = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  text-align: center;
  color: white;
  max-width: 256px;
  margin: 36px auto;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Logo src={logo} alt="Securely" />
        <Tagline>
          Open source, self-destructing, encrypted messages that keep your information safe.
        </Tagline>
      </AppWrapper>
    );
  }
}

export default App;
