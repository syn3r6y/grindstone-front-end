import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import globalStyles from './global-styles';
import Navigator from './components/Navigator';
import Editor from './components/Editor/';
import PropertyPanel from './components/PropertyPanel';

class App extends Component {
  render() {
    globalStyles();

    return (
      <Router>
        <Wrapper>
          <Navigator />
          <Editor />
          <PropertyPanel />
        </Wrapper>
      </Router>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

export default App;
