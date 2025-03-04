import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import Sidebar from '@/components/organisms/Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <Box height="100vh" bg="gray.50">
        <Story />
        {/* Simulated content area */}
        <Box ml={{ base: 0, md: '60' }} p="4">
          <Box 
            bg="white" 
            p="4" 
            borderRadius="md" 
            shadow="sm"
            height="200px"
          >
            Sample Content Area
          </Box>
        </Box>
      </Box>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// Default sidebar with all features
export const Default: Story = {
  args: {},
};
