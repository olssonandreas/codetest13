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
  height: 60px;
  background-color: green;
  padding: 20px;
  img {
    width: 100px;
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
