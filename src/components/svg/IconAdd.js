import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const IconAdd = ({ color }) =>
  <SVG
    width="100%"
    height="100%"
    viewBox="0 0 11 11"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      color={color}
      d="M0,4.512l4.502,0l0,-4.512l1.478,0l0,4.512l4.502,0l0,1.513l-4.502,0l0,4.512l-1.478,0l0,-4.512l-4.502,0l0,-1.513Z"
    />
  </SVG>;

/** Properties */
IconAdd.propTypes = {
  color: PropTypes.string
};

export default IconAdd;

/** Styles */
const SVG = styled.svg`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 1.41421;
`;

const Path = styled.path`fill: ${props => props.color};`;
