import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import logo from 'assets/logo.svg';

import Overview from './pages/Overview';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  padding-left: 20px;
  height: 60px;
  background-color: green;
  img {
    width: 100px;
    border: 1px solid transparent;
    &:focus {
      outline: none;
      border-color: white;
    }
  }
`;

export default () => {
  return (
    <Router>
      <Header><Link to="/"><img src={logo} alt="logo"></img></Link></Header>
      <Container>
        <Switch>
          <Route path="/">
            <Overview />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};
