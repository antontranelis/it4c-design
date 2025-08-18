import type { Meta, StoryObj } from '@storybook/react';

import CalendarPage from '../pages/CalendarPage';
import postsData from './assets/posts.json';

const meta: Meta<typeof CalendarPage> = {
  title: 'Pages/CalendarPage',
  component: CalendarPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock fetch decorator that provides the real events data
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

export const WithManyEvents: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const manyEventsData = {
      ...postsData,
      events: [
        ...postsData.events,
        {
          "date": "2024-06-12",
          "title": "Team Meeting",
          "description": "Weekly sync meeting"
        },
        {
          "date": "2024-06-18",
          "title": "Birthday Party",
          "description": "Celebrating Sarah's birthday"
        },
        {
          "date": "2024-06-25",
          "title": "Conference",
          "description": "Tech conference downtown"
        }
      ]
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(manyEventsData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};

export const EmptyCalendar: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const emptyEventsData = {
      ...postsData,
      events: []
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(emptyEventsData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};