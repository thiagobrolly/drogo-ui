import { Meta, Story } from '@storybook/react';
import { Separator, SeparatorProps } from '.';

export default {
  title: 'Components/Separator',
  component: Separator,
  argTypes: {
    color: { control: 'color' },
  },
  args: {},
} as Meta;

export const Default: Story<SeparatorProps> = (args) => <Separator {...args} />;
