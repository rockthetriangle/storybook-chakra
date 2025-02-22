import type { Meta, StoryObj } from "@storybook/react";
import { Input, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import * as React from "react";
import { InputGroup, InputGroupProps } from "@/components/Chakra/input-group";

const meta: Meta<typeof InputGroup> = {
  title: "Molecules/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    startElement: { control: "text" },
    endElement: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const SearchInput: Story = {
  args: {
    startElement: <LuSearch />,
    endElement: <Kbd>⌘K</Kbd>,
    children: <Input placeholder="Search contacts" />,
  },
  render: (args) => {
    console.log("SearchInput Props:", args);
    return <InputGroup {...args} />;
  },
};

export const UrlInput: Story = {
  args: {
    startElement: "https://",
    endElement: <Kbd>.com</Kbd>,
    children: <Input placeholder="yoursite.com" />,
  },
};
