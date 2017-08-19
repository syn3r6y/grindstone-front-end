import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ColorItem from './ColorItem';

const ColorItems = ({ title, colors, addColor }) =>
  <Wrapper>
    <h4>
      {title}
    </h4>
    <ColorArray>
      {colors
        ? colors.map(color => {
            <ColorItem rgba={color.rgba} hex={color.hex} title={color.title} />;
          })
        : null}
      <ColorItem
        empty={true}
        action={() => addColor({ r: 255, g: 255, b: 255, a: 0 })}
      />
    </ColorArray>
  </Wrapper>;

ColorItems.propTypes = {
  title: PropTypes.string,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      rgba: PropTypes.string,
      hex: PropTypes.string,
      title: PropTypes.string,
      action: PropTypes.func,
      empty: PropTypes.bool
    })
  ),
  addColor: PropTypes.func
};

export default ColorItems;

/** Styles */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColorArray = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-wrap: wrap;
  margin-top: 1em;
`;
