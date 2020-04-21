import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
    <Fragment>
    <Header><img src={logo} alt="logo"></img></Header>
      <Container>
        <Router>
            <Switch>
              <Route path="/">
                <Overview />
              </Route>
            </Switch>
        </Router>
      </Container>
    </Fragment>
  );
};
