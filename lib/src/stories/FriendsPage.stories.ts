import type { Meta, StoryObj } from '@storybook/react';

import FriendsPage from '../pages/FriendsPage';
import postsData from './assets/posts.json';

const meta: Meta<typeof FriendsPage> = {
  title: 'Pages/FriendsPage',
  component: FriendsPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock fetch decorator that provides the real friends data
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

export const WithManyFriends: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const manyFriendsData = {
      ...postsData,
      friends: [
        ...postsData.friends,
        {
          "id": "4",
          "username": "diana_travel",
          "name": "Diana",
          "avatar": "https://techzaa.in/rasket/admin/assets/images/users/avatar-4.jpg",
          "bio": "World traveler and blogger.",
          "status": "away"
        },
        {
          "id": "5",
          "username": "edgar_garden",
          "name": "Edgar",
          "avatar": "https://techzaa.in/rasket/admin/assets/images/users/avatar-5.jpg",
          "bio": "Gardening expert and nature lover.",
          "status": "online"
        },
        {
          "id": "6",
          "username": "frank_tech",
          "name": "Frank",
          "avatar": "https://techzaa.in/rasket/admin/assets/images/users/avatar-6.jpg",
          "bio": "Software developer and tech enthusiast.",
          "status": "offline"
        }
      ]
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(manyFriendsData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};

export const EmptyState: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const emptyFriendsData = {
      ...postsData,
      friends: []
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(emptyFriendsData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};