import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { CustomPicker } from 'react-color';
import { Saturation, Alpha, Hue } from 'react-color/lib/components/common';

class Colors extends PureComponent {
  static propTypes = {
    backgroundColor: PropTypes.string,
    onColorChange: PropTypes.func
  };

  static defaultProps = {
    backgroundColor: '#FFF'
  };

  render() {
    const { hsl, hsv, onChange, rgb } = this.props;

    return (
      <Wrapper>
        {/* <h5>Color</h5> */}
        <Color
          style={{
            backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`
          }}
        />
        <Adjustable>
          <SatWrapper>
            <Saturation {...this.props} hsl={hsl} hsv={hsv} />
          </SatWrapper>
          <SliderWrapper>
            <Hue pointer={Pointer} direction="vertical" {...this.props} />
          </SliderWrapper>
          <SliderWrapper>
            <Alpha
              pointer={AlphaPointer}
              direction="vertical"
              {...this.props}
            />
          </SliderWrapper>
        </Adjustable>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 18em;
  height: 10em;
  padding: 1em;
  background: #ddd;
  display: flex;
  flex-direction: row;
`;

const Color = styled.div`
  width: 3em;
  height: 3em;
  margin-right: 1em;
`;

const Adjustable = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 12em;
`;

const SatWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 8em;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 1em;
  height: 100%;
  margin-left: 1em;
`;

const Pointer = styled.div`
  background: #fff;
  border-radius: 0.125em;
  z-index: 10;
  transform: translate(0, -0.5em);
  width: 1em;
  height: 1em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.3);
`;

const AlphaPointer = styled.div`
  background: #fff;
  border-radius: 0.125em;
  z-index: 10;
  transform: translate(-3px, -0.5em);
  width: 1em;
  height: 1em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.3);
`;

export default CustomPicker(Colors);
