import type { Meta, StoryObj } from '@storybook/react';

import MarketPage from '../pages/MarketPage';
import postsData from './assets/posts.json';

const meta: Meta<typeof MarketPage> = {
  title: 'Pages/MarketPage',
  component: MarketPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock fetch decorator that provides the real items data
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

export const WithManyItems: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const manyItemsData = {
      ...postsData,
      items: [
        ...postsData.items,
        {
          "name": "Gaming Chair",
          "price": "$250",
          "image": "https://images.unsplash.com/photo-1541558869434-2840d308329a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "name": "Smartphone",
          "price": "$699",
          "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "name": "Book Collection",
          "price": "$45",
          "image": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(manyItemsData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};

export const EmptyMarket: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const emptyItemsData = {
      ...postsData,
      items: []
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(emptyItemsData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};