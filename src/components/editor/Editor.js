import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import BrandColors from '../../containers/BrandColors';
import Typography from '../../containers/Typography';
import Elements from '../../containers/Elements';

const Editor = () =>
  <Wrapper>
    <Route path="/brand" component={BrandColors} />
    <Route path="/typography" component={Typography} />
    <Route path="/elements" component={Elements} />
  </Wrapper>;

export default Editor;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  background: #fff;
  position: relative;
  z-index: 2;
  border-left: 1px solid #dedede;
  border-right: 1px solid #dedede;
  padding: 2em 4em;
`;
