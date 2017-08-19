import React from 'react';
import styled from 'styled-components';

import GrindstoneLogo from '../svg/GrindstoneLogo';
import IconFill from '../svg/IconFill';
import IconText from '../svg/IconText';
import IconGroup from '../svg/IconGroup';
import NavItem from './NavItem';
import colors from '^/constants/colors';
import { rgbaObjectToString } from '^/utils';

let { blue, purple } = colors;
blue = rgbaObjectToString(blue);
purple = rgbaObjectToString(purple);

const Navigator = () => {
  return (
    <Wrapper>
      <GrindstoneLogo color="#FFF" />
      <Nav>
        <NavItem icon={<IconFill color="#FFF" />} link="/brand" />
        <NavItem icon={<IconText color="#FFF" />} link="/typography" />
        <NavItem icon={<IconGroup color="#FFF" />} link="/elements" />
      </Nav>
      <DummyBox />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 4em;
  background: linear-gradient(135deg, ${blue}, ${purple});
  align-items: center;
  justify-content: space-between;

  > svg {
    margin: 1em;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -3em;
`;

const DummyBox = styled.div`
  height: 1px;
  opacity: 0;
`;

export default Navigator;
