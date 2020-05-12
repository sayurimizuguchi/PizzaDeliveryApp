import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { s } from './../../styles'

import Button from './Button';
import { CenterView, PaddingView } from './Layouts';
import { Swatch } from './Color/swatch';
import { MotorCycle, Icon } from '../../components/icon.component';

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

  storiesOf('Typography', module)
  .addDecorator(getStory => <PaddingView>{getStory()}</PaddingView>)
  .add('fonts', () => (
    <>
      <Text style={[s.f_heading_1]}>Heading-1</Text>
      <Text style={[s.f_heading_2]}>Heading-1</Text>
      <Text style={[s.f_heading_3]}>Heading-1</Text>
      <Text style={[s.f_copy]}>copy</Text>
      <Text style={[s.f_copy_bold]}>copy bold</Text>
      <Text style={[s.f_emphasized]}>Emphasized</Text>
    </>
  ))

  storiesOf('Icons', module)
  .addDecorator(getStory => <PaddingView>{getStory()}</PaddingView>)
  .add('icons', () => (
    <>
      <Icon name="motorcycle" />
      <Icon name="bill" />
      <Icon name="burger" />
      <Icon name="check" />
      <Icon name="close" />
      <Icon name="cog" />
      <Icon name="credit-card" />
      <Icon name="left-arrow" />
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
