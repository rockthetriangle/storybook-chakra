import MenuItem from '@/components/molecules/MenuItem';
import type { Meta, StoryObj } from '@storybook/react';
import { FiHome, FiSettings, FiUser } from 'react-icons/fi';

const meta: Meta<typeof MenuItem> = {
  title: 'Molecules/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
      description: 'Icon component to render',
    },
    children: {
      control: 'text',
      description: 'Menu item label',
    },
    href: {
      control: 'text',
      description: 'Menu item link',
    },
    isActive: {
      control: 'boolean',
      description: 'Active state of the menu item',
    },
  }
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    icon: FiHome,
    children: 'Home',
    href: '/',
  },
};

export const Active: Story = {
  args: {
    icon: FiHome,
    children: 'Home',
    isActive: true,
    href: '/',
  },
};

export const WithSettingsIcon: Story = {
  args: {
    icon: FiSettings,
    children: 'Settings',
    href: '/settings',
  },
};

export const WithProfileIcon: Story = {
  args: {
    icon: FiUser,
    children: 'Profile',
    href: '/profile',
  },
};