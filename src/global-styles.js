/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';

const globalStyles = () => {
  injectGlobal`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        min-height: 100%;
        font-size: 16px;
    }
    `;

  return null;
};

export default globalStyles;
