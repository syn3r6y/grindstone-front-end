import React, { PureComponent } from 'react';
import Colors from './Colors';

export default class ColorPicker extends PureComponent {
  state = {
    backgroundColor: '#FFF'
  };

  handleChange = color => {
    this.setState({
      backgroundColor: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb
        .b}, ${color.rgb.a})`
    });
  };

  render() {
    const { backgroundColor } = this.state;

    return (
      <Colors color={backgroundColor} onChangeComplete={this.handleChange} />
    );
  }
}
