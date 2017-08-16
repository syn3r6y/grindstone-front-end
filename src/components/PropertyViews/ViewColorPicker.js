import React from 'react';
import styled from 'styled-components';
import ColorPicker from '../ColorPicker';

const ViewColorPicker = () =>
  <Wrapper>
    <ColorPicker />
  </Wrapper>;

export default ViewColorPicker;

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;
