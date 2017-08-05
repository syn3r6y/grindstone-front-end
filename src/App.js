import React, { Component } from 'react';
import styled from 'styled-components';

import globalStyles from './global-styles';
import Navigator from './components/navigation/Navigator';
import Editor from './components/editor/Editor';
import PropertyPanel from './components/property-ui/PropertyPanel';

class App extends Component {
  render() {
    globalStyles();

    return (
      <Wrapper>
        <Navigator />
        <Editor />
        <PropertyPanel />
      </Wrapper>
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
