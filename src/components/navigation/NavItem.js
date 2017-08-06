import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const NavItem = ({ icon }) =>
  <Wrapper>
    {icon}
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
  icon: PropTypes.func.isRequired
};

export default NavItem;
