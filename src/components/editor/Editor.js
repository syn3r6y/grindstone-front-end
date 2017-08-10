import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import BrandColors from '../../containers/BrandColors';
import Typography from '../../containers/Typography';
import Elements from '../../containers/Elements';
// import Picker from '../ColorPicker/';

const Editor = () =>
  <Wrapper>
    <Route path="/brand" component={BrandColors} />
    <Route path="/typography" component={Typography} />
    <Route path="/elements" component={Elements} />
    {/* <Picker /> */}
  </Wrapper>;

export default Editor;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;
