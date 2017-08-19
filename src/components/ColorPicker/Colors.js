import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { CustomPicker } from 'react-color';
import {
  Saturation,
  Alpha,
  Hue,
  EditableInput
} from 'react-color/lib/components/common';

class Colors extends PureComponent {
  static propTypes = {
    backgroundColor: PropTypes.string,
    onColorChange: PropTypes.func
  };

  static defaultProps = {
    backgroundColor: '#FFF'
  };

  render() {
    const { hsl, hsv, onChange, rgb, hex } = this.props;

    const styles = {
      wrap: {
        width: '2rem',
        margin: '1rem 0.25rem 0 0',
        display: 'flex',
        flexDirection: 'column'
      },
      input: {
        border: '1px solid #CCC',
        height: '1.5rem',
        width: '2rem',
        borderRadius: '0.25rem',
        textAlign: 'center'
      },
      label: {
        textTransform: 'uppercase',
        fontSize: '0.75rem',
        marginTop: '0.25rem',
        textAlign: 'center'
      }
    };

    const hexStyles = {
      wrap: {
        width: '4rem',
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 0
      },
      input: {
        border: '1px solid #CCC',
        height: '1.5rem',
        width: '4rem',
        borderRadius: '0.25rem',
        textAlign: 'center'
      },
      label: {
        textTransform: 'uppercase',
        fontSize: '0.75rem',
        marginTop: '0.25rem',
        textAlign: 'center'
      }
    };

    return (
      <Wrapper>
        <h5>Color</h5>
        <ControlWrapper>
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
        </ControlWrapper>
        <InputWrapper>
          <EditableInput
            label="r"
            value={rgb.r}
            dragLabel="true"
            dragMax="255"
            style={styles}
          />
          <EditableInput
            label="g"
            value={rgb.g}
            dragLabel="true"
            dragMax="255"
            style={styles}
          />
          <EditableInput
            label="b"
            value={rgb.b}
            dragLabel="true"
            dragMax="255"
            style={styles}
          />
          <EditableInput
            label="a"
            value={Math.round(rgb.a * 100)}
            dragLabel="true"
            dragMax="100"
            style={styles}
          />
          <EditableInput
            style={hexStyles}
            label="hex"
            value={hex.replace('#', '')}
          />
        </InputWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  padding: 1em;
  width: 18em;
  height: 13em;
  align-items: flex-start;
  border-bottom: 1px solid #dedede;
  h5 {
    margin-top: 0;
    margin-bottom: 0.5em;
  }
`;

const ControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 6em;
  flex-grow: 0;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.25em;
`;

const Color = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 1.5em;
  margin-right: 1em;
  border: 1px solid #dedede;
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
  border-radius: 0.5em;
  overflow: hidden;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 1em;
  border-radius: 0.5em;
  border: 1px solid #dedede;
  height: 100%;
  margin-left: 1em;
  z-index: 10;

  .hue-vertical {
    border-radius: 1.5em;
  }
  > div > div {
    border-radius: 0.5em;
  }
`;

const Pointer = styled.div`
  background: #fff;
  border-radius: 0.75em;
  z-index: 10;
  transform: translate(-3px, -0.75em);
  width: 1.25em;
  height: 1.25em;
  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.3);
`;

const AlphaPointer = styled.div`
  background: #fff;
  border-radius: 0.75em;
  z-index: 10;
  transform: translate(-6px, -0.75em);
  width: 1.25em;
  height: 1.25em;
  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.3);
`;

export default CustomPicker(Colors);
