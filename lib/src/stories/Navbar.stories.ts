import type { Meta, StoryObj } from '@storybook/react';

import Navbar from '../components/Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onToggleSidebar: { action: 'sidebar toggled' },
  },
  args: {
    onToggleSidebar: () => console.log('Sidebar toggled'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Interactive: Story = {
  args: {
    onToggleSidebar: () => console.log('Sidebar toggled'),
  },
};