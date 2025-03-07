import type { Meta, StoryObj } from "@storybook/react";

import { Box, Text } from "@chakra-ui/react";
import Sidebar from "@/components/organisms/Sidebar";
import SidebarMenu from "@/components/organisms/SidebarMenu";

const meta = {
  title: "Organisms/SidebarMenu",
  component: SidebarMenu,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <Box p="4">
    <Text fontSize="2xl" fontWeight="bold" mb="4">
      Main Content Area
    </Text>
    <Box bg="white" p="4" borderRadius="md" shadow="sm">
      <Text>
        This content will be pushed when the sidebar opens on mobile devices.
        Try resizing your browser window to see the responsive behavior.
      </Text>
    </Box>
  </Box>
);

    export const Default: Story = {
  args: {
    sidebar: <Sidebar />,
    children: <SampleContent />,
  },
  render: (args) => <SidebarMenu {...args} />,
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    sidebar: <Sidebar />,
    children: <SampleContent />,
  },
  render: (args) => <SidebarMenu {...args} />,
};
