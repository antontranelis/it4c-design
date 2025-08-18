import type { Meta, StoryObj } from '@storybook/react';

import MapPage from '../pages/MapPage';
import postsData from './assets/posts.json';

const meta: Meta<typeof MapPage> = {
  title: 'Pages/MapPage',
  component: MapPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock fetch decorator that provides the real locations data
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

export const WithManyLocations: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const manyLocationsData = {
      ...postsData,
      locations: [
        ...postsData.locations,
        {
          "id": 6,
          "coordinates": [7.588576, 47.559599],
          "title": "Basel",
          "description": "Basel is a city in northwestern Switzerland"
        },
        {
          "id": 7,
          "coordinates": [8.231038, 46.818188],
          "title": "Lucerne",
          "description": "Lucerne is a city in central Switzerland"
        }
      ]
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(manyLocationsData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};

export const EmptyMap: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const emptyLocationsData = {
      ...postsData,
      locations: []
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(emptyLocationsData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};