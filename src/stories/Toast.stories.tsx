import { Button } from "@/components/atoms/Button";
import { Toaster, toaster } from "@/components/atoms/toaster";
import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

interface ToastDemoProps {
  message: string;
  type: "success" | "error" | "info" | "warning";
  duration: number;
}

// Toast demo component
const ToastDemo = ({ message, type, duration }: ToastDemoProps) => {
  const showToast = () => {
    toaster.create({
      description: message,
      type,
      duration,
    });
  };

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Button onClick={showToast} variant="solid">
        Show Toast
      </Button>
    </Box>
  );
};

// Storybook meta configuration
const meta: Meta<typeof ToastDemo> = {
  title: "Atoms/Toast (Chakra UI)",
  component: ToastDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    message: "This is a toast notification!",

    type: "info",
    duration: 5000,
  },
  argTypes: {
    message: {
      control: "text",
      description: "Toast message content",
    },

    type: {
      control: "radio",
      options: ["success", "error", "info", "warning"],
      description: "Toast status type",
    },
    duration: {
      control: { type: "number", min: 1000, max: 10000, step: 1000 },
      description: "Auto close delay in milliseconds",
    },
  },
  decorators: [
    (Story) => (
      <Box>
        <Story />
        <Toaster />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ToastDemo>;

// Status stories
export const StatusInfo: Story = {
  name: "type: Info",
  args: {
    type: "info",
  },
};

export const StatusSuccess: Story = {
  name: "type: Success",
  args: {
    type: "success",
    message: "Operation completed successfully!",
  },
};

export const StatusWarning: Story = {
  name: "type: Warning",
  args: {
    type: "warning",
    message: "Warning: This action cannot be undone!",
  },
};

export const StatusError: Story = {
  name: "type: Error",
  args: {
    type: "error",
    message: "An error occurred. Please try again.",
  },
};
