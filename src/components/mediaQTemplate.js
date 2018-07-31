import { css } from 'styled-components';

const sizes = {
  hdScreen: 1920,
  inch15: 1536,
  ipadPro: 1024,
  ipad: 768,
  plusPhone: 576,
  iphoneX8: 375,
  iphoneSE: 320
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  if (sizes[label] <= 1024) {
    //
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;
    return acc;
  } else {
    //
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;
    return acc;
  }
}, {});
