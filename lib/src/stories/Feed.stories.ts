import type { Meta, StoryObj } from '@storybook/react';

import Feed from '../components/Feed';
import postsData from './assets/posts.json';

const meta: Meta<typeof Feed> = {
  title: 'Components/Feed',
  component: Feed,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock fetch decorator that provides the real posts data
const withMockFetch = (Story: any) => {
  // Mock window.fetch before the component mounts
  const originalFetch = window.fetch;
  
  window.fetch = async (url: string) => {
    if (url.includes('posts.json')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(postsData),
      }) as any;
    }
    return originalFetch(url);
  };

  return Story();
};

export const Default: Story = {
  decorators: [withMockFetch],
  args: {},
};

export const WithRealData: Story = {
  decorators: [withMockFetch],
  args: {},
};