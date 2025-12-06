/** @type { import('@storybook/react-vite').Preview } */
import { themes } from '@storybook/theming';

const preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    darkMode: {
      current: 'dark',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
