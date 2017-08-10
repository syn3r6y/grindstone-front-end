import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import colors from '../../constants/colors';
const { blue } = colors;

const NavItem = ({ icon, link }) =>
  <Wrapper>
    <NavLink to={link} activeClassName="-active">
      {icon}
    </NavLink>
  </Wrapper>;

const Wrapper = styled.div`
  width: 3em;
  height: 3em;
  position: relative;
  left: 0.5em;
  z-index: 2;

  > a {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0.75em;
    border-radius: 0.25em 0 0 0.25em;
    position: relative;
    z-index: 3;
  }

  > .-active {
    background: #fff;
    box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.3);

    > svg {
      fill: ${blue};
    }
  }
`;

NavItem.propTypes = {
  icon: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired
};

export default NavItem;
