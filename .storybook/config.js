import { configure } from '@storybook/react';

configure(() => {
  const context = require.context('../src', true, /__story.js$/)
  context.keys().forEach(context);
}, module);