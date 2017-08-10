import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const NavItem = ({ icon, link }) =>
  <Wrapper>
    <Link to={link}>
      {icon}
    </Link>
  </Wrapper>;

const Wrapper = styled.div`
  width: 3em;
  height: 3em;
  padding: 0.75em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

NavItem.propTypes = {
  icon: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired
};

export default NavItem;
