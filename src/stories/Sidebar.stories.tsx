// src/stories/Sidebar.stories.tsx
import Sidebar from "../components/organisms/Sidebar";
import ICONS from "../icons/icons";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sidebar> = {
  title: "Organisms/Sidebar",
  component: Sidebar,
  argTypes: {
    items: {
      control: "object",
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Sidebar> = {
  args: {
    items: [
      { name: "house", label: "Home" },
      { name: "buildings", label: "Clearances" },
    ],
  },
};