import type { Meta, StoryObj } from "@storybook/react";
import WorkHistory from "@/components/organisms/WorkHistory";
import { Box } from "@chakra-ui/react";

const meta: Meta<typeof WorkHistory> = {
  title: "Organisms/WorkHistory",
  component: WorkHistory,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof WorkHistory>;

// Default story in light mode
export const Light: Story = {
  render: () => (
    <Box className="light">
      <WorkHistory />
    </Box>
  ),
  parameters: {
    backgrounds: { default: "light" },
  },
};

// Dark mode version
export const Dark: Story = {
  render: () => (
    // <ColorModeProvider value="dark">
    <Box className="dark">
      <WorkHistory />
    </Box>
    // </ColorModeProvider>
  ),
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// Combined view showing both modes
export const BothModes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={8}>
      <Box className="light">
        <h3 style={{ marginBottom: "1rem" }}>Light Mode</h3>
        <WorkHistory />
      </Box>

      <Box className="dark">
        <h3 style={{ marginBottom: "1rem" }}>Dark Mode</h3>
        <WorkHistory />
      </Box>
    </Box>
  ),
};
