import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ColorItems = ({ title, colors }) =>
  <Wrapper>
    <h4>
      {title}
    </h4>
    <ColorArray />
  </Wrapper>;

ColorItems.propTypes = {
  title: PropTypes.string,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      rgba: PropTypes.string,
      hex: PropTypes.string,
      title: PropTypes.string,
      action: PropTypes.func
    })
  )
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
`;
