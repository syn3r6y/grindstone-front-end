import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

import * as colorActions from '../actions/colorActions';
import * as propertyActions from '../actions/propertyViewActions';
import ColorItems from '../components/ColorItems';

class BrandColors extends PureComponent {
  /** Properties */
  static propTypes = {
    colors: PropTypes.array,
    actions: PropTypes.object
  };

  /** Component Render */
  render() {
    const { colors, colorActions, propertyActions } = this.props;

    return (
      <Wrapper>
        <h3>Colors</h3>
        <ColorItems
          colors={colors}
          title="Primary Colors"
          addColor={colorActions.addColor}
        />
      </Wrapper>
    );
  }
}

/** Redux Hookups */
const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    colorActions: bindActionCreators(colorActions, dispatch),
    propertyActions: bindActionCreators(propertyActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandColors);

/** Styles */
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
