import React, { JSXElementConstructor, ReactElement } from "react";
import { Input, HStack, Kbd, NativeSelectRoot, NativeSelectField, InputElementProps } from "@chakra-ui/react";
import { LuUser, LuSearch } from "react-icons/lu";
import { InputGroup } from "@/components/ui/input-group";
import type { Meta, StoryObj } from "@storybook/react";

interface InputGroupProps {
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  children: ReactElement<InputElementProps, string | JSXElementConstructor<any>>;
}

/**
 * InputGroup component with support for start and end elements
 */
const CustomInputGroup: React.FC<InputGroupProps> = ({
  startElement,
  endElement,
  children,
}) => {
  return (
    <InputGroup startElement={startElement} endElement={endElement}>
      {children}
    </InputGroup>
  );
};

const meta = {
  title: "Molecules/InputGroup1",
  component: CustomInputGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    startElement: null,
    endElement: null,
    children: <Input placeholder="Enter text..." />,
  },
  argTypes: {
    startElement: {
      control: "text",
      description: "Element to be displayed at the start of the input",
    },
    endElement: {
      control: "text",
      description: "Element to be displayed at the end of the input",
    },
    children: {
      control: "text",
      description: "Input element",
    },
  },
} satisfies Meta<typeof CustomInputGroup>;

export default meta;
type Story = StoryObj<typeof CustomInputGroup>;

/**
 * Basic InputGroup example
 */
export const Basic: Story = {
  args: {
    children: <Input placeholder="Enter your name" />,
  },
};

/**
 * InputGroup with start element (icon)
 */
export const WithStartElement: Story = {
  args: {
    startElement: <LuUser />,
    children: <Input placeholder="Username" />,
  },
};

/**
 * InputGroup with end element (keyboard shortcut)
 */
export const WithEndElement: Story = {
  args: {
    endElement: <Kbd>⌘K</Kbd>,
    children: <Input placeholder="Search contacts" />,
  },
};

/**
 * InputGroup with both start and end elements
 */
export const WithStartAndEndElements: Story = {
  args: {
    startElement: <LuSearch />,
    endElement: <Kbd>⌘K</Kbd>,
    children: <Input placeholder="Search contacts" />,
  },
};

/**
 * InputGroup with text as start element
 */
export const WithTextStartElement: Story = {
  args: {
    startElement: "https://",
    children: <Input ps="4.75em" placeholder="yoursite.com" />,
  },
};

/**
 * InputGroup with custom component as end element
 */
export const WithCustomEndElement: Story = {
  render: (args) => {
    const DomainSelect = () => (
      <NativeSelectRoot size="xs" variant="plain" width="auto" me="-1">
        <NativeSelectField defaultValue=".com" fontSize="sm">
          <option value=".com">.com</option>
          <option value=".org">.org</option>
          <option value=".net">.net</option>
        </NativeSelectField>
      </NativeSelectRoot>
    );

    return (
      <CustomInputGroup
        startElement="https://"
        endElement={<DomainSelect />}
      >
        <Input ps="4.75em" placeholder="yoursite.com" />
      </CustomInputGroup>
    );
  },
};