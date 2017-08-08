import React from 'react';
import styled from 'styled-components';

import Picker from '../ColorPicker/';

const Editor = () =>
  <Wrapper>
    <Picker />
  </Wrapper>;

export default Editor;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;
