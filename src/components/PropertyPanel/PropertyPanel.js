import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const PropertyPanel = ({ activePanel }) =>
  <Wrapper>
    {activePanel}
  </Wrapper>;

/** Properties */
PropertyPanel.propTypes = {
  activePanel: PropTypes.element
};

export default PropertyPanel;

/** Styles */
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 18em;
  background: #eee;
`;
