import type { Meta, StoryObj } from "@storybook/react";
import WorkHistory from "@/components/organisms/WorkHistory";

const meta: Meta<typeof WorkHistory> = {
  title: "Organisms/WorkHistory",
  component: WorkHistory,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WorkHistory>;

// Default sidebar with all features
export const Default: Story = {
  args: {},
};
