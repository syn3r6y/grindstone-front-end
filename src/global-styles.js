/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';

import ProximaSoftLight from './fonts/proxima-nova-soft-light-webfont.ttf';
import ProximaSoftRegular from './fonts/proxima-nova-soft-regular.otf';
import ProximaSoftMedium from './fonts/proxima-nova-soft-normal-webfont.ttf';
import ProximaSoftSemiBold from './fonts/proxima-nova-soft-semibold.otf';
import ProximaSoftBold from './fonts/proxima-nova-soft-bold.otf';

import colors from './constants/colors';
const { black } = colors;

const globalStyles = () => {
  injectGlobal`
    @font-face {
        font-family: 'Proxima Soft';
        src: url(${ProximaSoftLight});
        font-weight: 300;
    }

    @font-face {
        font-family: 'Proxima Soft';
        src: url(${ProximaSoftRegular});
        font-weight: 400;
    }

    @font-face {
        font-family: 'Proxima Soft';
        src: url(${ProximaSoftMedium});
        font-weight: 500;
    }

    @font-face {
        font-family: 'Proxima Soft';
        src: url(${ProximaSoftSemiBold});
        font-weight: 600;
    }

    @font-face {
        font-family: 'Proxima Soft';
        src: url(${ProximaSoftBold});
        font-weight: 700;
    }
  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        min-height: 100%;
        font-size: 16px;
        line-height: 21px;
    }

    body {
        color: ${black};
        font-family: 'Proxima Soft';
        font-weight: 300;
        line-height: 1.3125em;
    }
    h1 {
        font-size: 3.375em;
        line-height: 1.16666667em;
        margin-top: 0.38888889em;
        margin-bottom: 0.77777778em;
    }
    h2 {
        font-size: 2.25em;
        line-height: 1.16666667em;
        margin-top: 0.58333333em;
        margin-bottom: 0.58333333em;
    }
    h3 {
        font-size: 1.5em;
        line-height: 1.75em;
        margin-top: 0.875em;
        margin-bottom: 0em;
    }
    h4 {
        font-size: 1em;
        line-height: 1.3125em;
        margin-top: 1.3125em;
        margin-bottom: 0em;
    }
    h5 {
        font-size: 1em;
        line-height: 1.3125em;
        margin-top: 1.3125em;
        margin-bottom: 0em;
    }
    p, ul, ol, pre, table, blockquote {
        margin-top: 0em;
        margin-bottom: 1.3125em;
    }
    ul ul, ol ol, ul ol, ol ul {
        margin-top: 0em;
        margin-bottom: 0em;
    }
      
    /* Let's make sure all's aligned */
    hr, .hr {
        border: 1px solid;
        margin: -1px 0;
    }
    a, b, i, strong, em, small, code {
        line-height: 0;
    }
    sub, sup {
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sup {
        top: -0.5em;
    }
    sub {
        bottom: -0.25em;
    }

    `;

  return null;
};

export default globalStyles;
