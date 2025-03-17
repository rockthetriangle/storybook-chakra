import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@chakra-ui/react";
import AuthForm from "@/components/organisms/AuthForm";

const meta: Meta<typeof AuthForm> = {
  title: "Organisms/AuthForm",
  component: AuthForm,
  decorators: [
    (Story) => (
      <Box maxW="md" py={6} px={0} mx="auto">
        <Story />
      </Box>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

export const Default: Story = {
  args: {},
};
