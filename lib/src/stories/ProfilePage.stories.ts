import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from '../pages/ProfilePage';
import postsData from './assets/posts.json';

const meta: Meta<typeof ProfilePage> = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock fetch decorator that provides the real user data
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

export const DifferentUser: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const differentUserData = {
      ...postsData,
      user: {
        "name": "Jane Smith",
        "bio": "Software engineer passionate about open source and sustainability.",
        "avatar": "https://techzaa.in/rasket/admin/assets/images/users/avatar-2.jpg"
      }
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(differentUserData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};

export const NoUser: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const noUserData = {
      ...postsData,
      user: null
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(noUserData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};