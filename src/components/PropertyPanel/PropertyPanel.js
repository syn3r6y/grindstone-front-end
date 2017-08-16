import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as propertyActions from '../../actions/propertyViewActions';
import ViewColorPicker from '../PropertyViews/ViewColorPicker';

class PropertyPanel extends PureComponent {
  static propTypes = {
    view: PropTypes.string
  };

  // componentWillMount() {
  //   const { view } = this.props;
  //   console.log('view', view);
  //   switch (view) {
  //     case 'color-selection':
  //       return this.setState({ activePanel:  });
  //     default:
  //       return null;
  //   }
  // }

  render() {
    return (
      <Wrapper>
        {this.props.view === 'color-selection' ? <ViewColorPicker /> : null}
      </Wrapper>
    );
  }
}

/** Styles */
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 18em;
  background: #eee;
`;

/** Redux Hookups */
const mapStateToProps = (state, ownProps) => {
  return {
    view: state.propertyViews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    propertyActions: bindActionCreators(propertyActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyPanel);
