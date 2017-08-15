import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import CircleButton from '../Buttons/CircleButton';
import IconAdd from '../svg/IconAdd';
import colors from '../../constants/colors';
const { blue } = colors;

const ColorItem = ({ title, rgba, hex, action, empty }) =>
  <Wrapper onClick={action}>
    {empty
      ? <EmptyItem>
          <CircleButton
            icon={<IconAdd color="#fff" />}
            color={blue}
            raised={true}
          />
        </EmptyItem>
      : <FilledItem>
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
        </FilledItem>}
  </Wrapper>;

export default ColorItem;

/** Props */

ColorItem.propTypes = {
  title: PropTypes.string,
  rgba: PropTypes.string,
  hex: PropTypes.string,
  action: PropTypes.func,
  empty: PropTypes.bool
};

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

const EmptyItem = styled.div`
  background: #faf9ff;
  height: 6em;
  width: 10em;
  border: 1.5px dashed rgb(${blue.r}, ${blue.g}, ${blue.b});
  border-radius: 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilledItem = styled.div`background: #eee;`;
