import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { s } from './../../styles'

import Button from './Button';
import CenterView from './CenterView';
import { Swatch } from './Color/swatch';

storiesOf('Color', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('swatches', () => (
    <>
      <Swatch style={[s.bg_orange_m]} />
      <Swatch style={[s.bg_yellow_m]} />
      <Swatch style={[s.bg_black]} />
      <Swatch style={[s.bg_gray_m]} />
    </>
  ))


storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Buttonnnnn</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
