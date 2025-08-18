import type { Meta, StoryObj } from '@storybook/react';

import SettingsPage from '../pages/SettingsPage';

const meta: Meta<typeof SettingsPage> = {
  title: 'Pages/SettingsPage',
  component: SettingsPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Interactive: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Interactive settings form where you can toggle notifications and dark mode settings.',
      },
    },
  },
};