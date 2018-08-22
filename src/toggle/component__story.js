import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Toggle from './component';

storiesOf('Toggle', module)
  .add('Plain', () => (
    <Toggle></Toggle>
  ))
  .add('with a label', () => (
    <Toggle>Hello Toggle</Toggle>
  ))
  .add('with custom state text', () => (
    <Toggle onClick={action('clicked')}
            onText="Yes"
            offText="No"> Really?</Toggle>
  ))
  .add('with some emoji', () => (
    <Toggle onClick={action('clicked')}>
      <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
    </Toggle>
  ))
  .add('with some emoji as state', () => (
    <Toggle onClick={action('clicked')}
            onText="😀"
            offText="😎">
    </Toggle>
  ));