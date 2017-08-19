import React from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import colors from '^/constants/colors';
import { rgbaObjectToString } from '^/utils';
let { lightPurple } = colors;
lightPurple = rgbaObjectToString(lightPurple);

const NavItem = ({ icon, link }) =>
  <Wrapper>
    <NavLink to={link} activeClassName="-active">
      {icon}
    </NavLink>
  </Wrapper>;

const activeAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    tranform: scale(1);
  }
`;

const Wrapper = styled.div`
  width: 3em;
  height: 3em;
  position: relative;
  z-index: 3;
  background: transparent;

  > a {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0.875em;
    border-radius: 0.25em 0 0 0.25em;
    position: relative;
    z-index: 3;
  }

  > .-active {
    padding: 0.75em;
    animation: ${activeAnimation} 0.5s;
    transition: background 0.5s;
    background: radial-gradient(
      circle,
      #974ff2 0%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0) 100%
    );

    > svg {
      filter: drop-shadow(0 0 0.125em #fff);
    }
  }
`;

NavItem.propTypes = {
  icon: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired
};

export default NavItem;
