import React from 'react';
import styled from 'styled-components';

const ColorItem = ({ title, rgba, hex, action }) =>
  <Wrapper onClick={action}>
    <Color />
    <p>
      {title}
    </p>
    <p>
      {hex}
    </p>
    <p>
      {rgba}
    </p>
  </Wrapper>;

export default ColorItem;

/** Styles */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Color = styled.div`
  margin: 1em;
  border-radius: 0.25em;
  background: ${props => props.color};
  width: 5em;
  height: 4em;
`;
