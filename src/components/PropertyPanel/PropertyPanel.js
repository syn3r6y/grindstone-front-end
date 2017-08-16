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

  state = {
    activePanel: ''
  };

  componentWillMount() {
    const { view } = this.props;
    switch (view) {
      case 'color picker':
        return this.setState({ activePanel: <ViewColorPicker /> });
      default:
        return null;
    }
  }

  render() {
    const { activePanel } = this.state;

    return (
      <Wrapper>
        {activePanel}
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
    view: state.propertyView
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyPanel);
