// src/stories/InputGroup.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { HStack, Input } from "@chakra-ui/react";
import { InputGroup } from "../components/ui/input-group";
import { LuUser } from "react-icons/lu";

const meta: Meta = {
  title: "Molecules/InputGroup",
  component: InputGroup,
  argTypes: {
    startElement: { control: "text" },
    placeholder: { control: "text" },
  },
};

export default meta;

export const Demo: StoryObj = {
  render: () => (
    <HStack gap="10" width="full">
      <InputGroup flex="1" startElement={<LuUser />}>
        <Input placeholder="Username" />
      </InputGroup>

      <InputGroup flex="1" startElement="https://">
        <Input ps="4.75em" placeholder="yoursite.com" />
      </InputGroup>
    </HStack>
  ),
};
