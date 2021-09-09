import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import NtisInput from './NtisInput';

export default {
    title: 'components/NtisInput',
    component: NtisInput
} as ComponentMeta<typeof NtisInput>;

const Template: ComponentStory<typeof NtisInput> = (args) => <NtisInput {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  placeholder: 'Large Input'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  placeholder: 'Default/Medium Input'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  placeholder: 'Small Input'
};

Small.storyName = 'Small Input';