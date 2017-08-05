import React from 'react';
import styled from 'styled-components';

import GrindstoneLogo from '../svg/GrindstoneLogo';

const Navigator = () => {
  return (
    <Wrapper>
      <GrindstoneLogo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 6em;
  background: #dedede;
  align-items: flex-start;

  > svg {
    margin: 2em;
  }
`;

export default Navigator;
