/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';

import ProximaSoftLight from './fonts/proxima-nova-soft-light-webfont.ttf';
import ProximaSoftRegular from './fonts/proxima-nova-soft-regular.otf';
import ProximaSoftMedium from './fonts/proxima-nova-soft-normal-webfont.ttf';
import ProximaSoftSemiBold from './fonts/proxima-nova-soft-semibold.otf';
import ProximaSoftBold from './fonts/proxima-nova-soft-bold.otf';

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
    }

    body {
        font-family: 'Proxima Soft';
        font-weight: 300;
    }

    `;

  return null;
};

export default globalStyles;
