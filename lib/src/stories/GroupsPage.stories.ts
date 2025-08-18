import type { Meta, StoryObj } from '@storybook/react';

import GroupsPage from '../pages/GroupsPage';
import postsData from './assets/posts.json';

const meta: Meta<typeof GroupsPage> = {
  title: 'Pages/GroupsPage',
  component: GroupsPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock fetch decorator that provides the real groups data
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

export const WithManyGroups: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const manyGroupsData = {
      ...postsData,
      groups: [
        ...postsData.groups,
        {
          "name": "Photography Club",
          "description": "Share your best shots and learn new techniques.",
          "banner": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "name": "Tech Enthusiasts",
          "description": "Discuss the latest in technology and innovation.",
          "banner": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "name": "Fitness Motivation",
          "description": "Support each other on your fitness journey.",
          "banner": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(manyGroupsData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};

export const EmptyGroups: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const emptyGroupsData = {
      ...postsData,
      groups: []
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(emptyGroupsData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};