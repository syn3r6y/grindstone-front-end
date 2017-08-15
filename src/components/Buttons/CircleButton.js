import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const CircleButton = ({ color, icon, raised }) => {
  if (raised) {
    return (
      <RaisedWrapper color={`${color.r}, ${color.g}, ${color.b}`}>
        {icon}
      </RaisedWrapper>
    );
  } else {
    return (
      <Wrapper color={`${color.r}, ${color.g}, ${color.b}`}>
        {icon}
      </Wrapper>
    );
  }
};

/** Properties */
CircleButton.propTypes = {
  color: PropTypes.object,
  icon: PropTypes.object,
  raised: PropTypes.bool
};

export default CircleButton;

/** Styles */
const Wrapper = styled.button`
  background: rgb(${props => props.color});
  height: 3rem;
  width: 3rem;
  border-radius: 1.5rem;
  padding: 0.875rem;
  border: none;
  cursor: pointer;
`;

const RaisedWrapper = Wrapper.extend`
  box-shadow: 0 2px 6px rgba(${props => props.color}, 0.5);
`;
