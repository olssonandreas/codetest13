import React  from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
`;

export default () => {
  return (
    <Container>
      <Router>
          <Switch>
            <Route path="/">
            </Route>
          </Switch>
      </Router>
    </Container>
  );
};
