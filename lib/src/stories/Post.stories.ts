import type { Meta, StoryObj } from '@storybook/react';

import Post from '../components/Post';

const meta: Meta<typeof Post> = {
  title: 'Components/Post',
  component: Post,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const samplePost = {
  banner: "https://placehold.co/600x400",
  title: "Hiking Adventure",
  text: "Exploring the beautiful mountain trails today! The view was absolutely breathtaking.",
  user: {
    id: "1",
    username: "alice_hiker",
    name: "Alice",
    avatar: "https://techzaa.in/rasket/admin/assets/images/users/avatar-1.jpg"
  }
};

export const Default: Story = {
  args: {
    post: samplePost,
  },
};

export const LongContent: Story = {
  args: {
    post: {
      ...samplePost,
      title: "An Amazing Journey Through the Mountains of Switzerland",
      text: "Today I embarked on an incredible journey through the Swiss Alps. The breathtaking views, crystal clear lakes, and majestic peaks made this one of the most memorable experiences of my life. I can't wait to share more photos and stories from this adventure!"
    },
  },
};

export const WithoutUserName: Story = {
  args: {
    post: {
      ...samplePost,
      user: {
        id: "2",
        username: "photographer",
        avatar: "https://techzaa.in/rasket/admin/assets/images/users/avatar-2.jpg"
      }
    },
  },
};

export const DifferentImage: Story = {
  args: {
    post: {
      banner: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop",
      title: "City Lights",
      text: "Captured the skyline during my evening walk downtown.",
      user: {
        id: "3",
        username: "charlie_photo",
        name: "Charlie",
        avatar: "https://techzaa.in/rasket/admin/assets/images/users/avatar-3.jpg"
      }
    },
  },
};