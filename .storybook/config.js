import { configure } from '@storybook/react';

configure(() => {
  const context = require.context('../components', true, /story.js$/)
  context.keys().forEach(context);
}, module);