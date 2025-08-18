import type { Meta, StoryObj } from '@storybook/react';

import HomePage from '../pages/HomePage';
import postsData from './assets/posts.json';

const meta: Meta<typeof HomePage> = {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock fetch decorator that provides the real posts data
const withMockFetch = (Story: any) => {
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

export const WithFeed: Story = {
  decorators: [withMockFetch],
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'HomePage with the Feed component displaying posts from the mock data.',
      },
    },
  },
};