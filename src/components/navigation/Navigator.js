import React, { Component } from 'react';
import styled from 'styled-components';

const Navigator = () => {
  return (
    <Wrapper>
      <p>N</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 6em;
  background: #dedede;
`;

export default Navigator;
