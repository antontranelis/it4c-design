import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from '../components/Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the sidebar is open or closed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    open: true,
  },
};

export const Closed: Story = {
  args: {
    open: false,
  },
};

export const Default: Story = {
  args: {
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default sidebar state with navigation items.',
      },
    },
  },
};