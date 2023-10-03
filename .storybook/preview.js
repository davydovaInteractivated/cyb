/** @type { import('@storybook/react').Preview } */

import { themes } from '../src/api/themes';

const values = [{
  name: `${themes[0].name}-dark`,
  value: themes[0].colors.dark,
}, {
  name: `${themes[0].name}-light`,
  value: themes[0].colors.light,
}];

// const values = themes
//   .map((theme) => ({
//     name: theme.name,
//     // value: `linear-gradient(90deg, ${theme.colors.light}, ${theme.colors.dark})`,
//     value: theme.colors.dark,
//   }));

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: `${themes[0].name}-dark`,
      values,
    }
  },
};

export default preview;
