import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react'
import NtisButton, { ButtonProps } from './NtisButton';
import { Center } from '../center/Center';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
    title: 'components/NtisButton',
    component: NtisButton,
    args: {
        label: 'Button',
        disabled: boolean('Disabled', true)
    },
    argTypes: {
        onClick: { action: 'clicked'}
    },
    // decorators: [story => {story()}]
} as ComponentMeta<typeof NtisButton>;

const Template: ComponentStory<typeof NtisButton> = (args) => <NtisButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    // label: 'Button'
};

export const LargePrimary = Template.bind({});
LargePrimary.args = {
    ...Primary.args,  // The iexisting story can be extended
    label: 'Large Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    label: 'Seconday'
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success',
    label: 'Success'
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
    label: 'Danger'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button'
};

export const Log = Template.bind({});
Log.args = {
  size: 'medium',
  label: 'Log',
  variant: 'primary',
  onClick: () => {
      // To add from where the button is clicked, add a decorator using withConsole in preview.js file
      // Youtube link: https://www.youtube.com/watch?v=_wnARkw4Aus&list=PLC3y8-rFHvwhC-j3x3t9la8-GQJGViDQk&index=14
      console.log('Button Clicked log')
  }
};

export const Knob = Template.bind({});
Knob.args = {
  size: 'medium',
  label: 'Knob',
  disabled: false
};