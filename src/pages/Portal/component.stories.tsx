import type { Meta, StoryObj } from '@storybook/react';
import Component from './index';
import { useToken } from '@chakra-ui/react';

const meta: Meta<typeof Component> = {
  title: 'Pages/Portal',
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    logo: 'https://via.placeholder.com/42',
    navbarItems: [
      { label: 'Home', value: '/home' },
      { label: 'About', value: '/about' },
      { label: 'Projects', value: '/projects' },
      { label: 'Contact', value: '/contact' },
    ],
    children: (
      <div style={{ height: '150vh', padding: '2rem' }}>
        <h1>Welcome to the Landing Page</h1>
        <p>Future components like search bar and side menu will be integrated here.</p>
      </div>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMenu: Story = {};

export const NoLogo: Story = {
  args: { logo: undefined },
};

export const CustomNavbar: Story = {
  args: {
    navbarItems: [
      { label: 'Features', value: '/features' },
      { label: 'Docs', value: '/docs' },
      { label: 'Blog', value: '/blog' },
    ],
  },
};

export const LongContent: Story = {
  args: {
    children: (
      <div style={{ height: '500vh', padding: '2rem' }}>
        <h1>Scroll Test</h1>
        <p>This example contains long content to test scrolling behavior.</p>
      </div>
    ),
  },
};
