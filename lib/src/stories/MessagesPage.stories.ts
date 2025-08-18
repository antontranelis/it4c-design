import type { Meta, StoryObj } from '@storybook/react';

import MessagesPage from '../pages/MessagesPage';
import postsData from './assets/posts.json';

const meta: Meta<typeof MessagesPage> = {
  title: 'Pages/MessagesPage',
  component: MessagesPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock fetch decorator that provides the real messages data
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

export const LongConversation: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const longConversationData = {
      ...postsData,
      messages: [
        { "from": "them", "text": "Hi there!" },
        { "from": "me", "text": "Hello! How are you doing?" },
        { "from": "them", "text": "I'm great, thanks for asking!" },
        { "from": "them", "text": "How was your weekend?" },
        { "from": "me", "text": "Pretty good! Went hiking with friends." },
        { "from": "them", "text": "That sounds amazing! Where did you go?" },
        { "from": "me", "text": "We went to the mountains nearby. The view was incredible!" },
        { "from": "them", "text": "I love hiking too! We should go together sometime." },
        { "from": "me", "text": "Absolutely! That would be fun." }
      ]
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(longConversationData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};

export const EmptyChat: Story = {
  decorators: [(Story: any) => {
    const originalFetch = window.fetch;
    
    const emptyMessagesData = {
      ...postsData,
      messages: []
    };
    
    window.fetch = async (url: string) => {
      if (url.includes('posts.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(emptyMessagesData),
        }) as any;
      }
      return originalFetch(url);
    };

    return Story();
  }],
  args: {},
};