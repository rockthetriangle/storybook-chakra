import { Meta, StoryObj } from "@storybook/react";
import SearchBar from "../components/organisms/SearchBar";

export default {
  title: "Organisms/SearchBar",
  component: SearchBar,
  argTypes: {
    withButton: { control: "boolean" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof SearchBar>;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    withButton: true,
    placeholder: "Search for something...",
  },
};
