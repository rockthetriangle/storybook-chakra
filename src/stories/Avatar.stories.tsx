import {
  Avatar,
  HStack,
  Stack,
  For,
  Text,
  AvatarGroup,
  Float,
  Circle,
} from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar.Root,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "md",
    variant: "solid",
    shape: "full",
    colorPalette: "gray",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Size of the avatar",
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "subtle"],
      description: "Visual style of the avatar",
    },
    shape: {
      control: "select",
      options: ["square", "rounded", "full"],
      description: "Shape of the avatar",
    },
    colorPalette: {
      control: "select",
      options: [
        "gray",
        "red",
        "green",
        "blue",
        "teal",
        "pink",
        "purple",
        "cyan",
        "orange",
        "yellow",
      ],
      description: "Color palette to use for the avatar",
    },
  },
} satisfies Meta<typeof Avatar.Root>;

export default meta;
type Story = StoryObj<typeof Avatar.Root>;

// Sample user data
const users = [
  { name: "Segun Adebayo", src: "https://bit.ly/sage-adebayo" },
  { name: "Kent Dodds", src: "https://bit.ly/kent-c-dodds" },
  { name: "Ryan Florence", src: "https://bit.ly/ryan-florence" },
  { name: "Dan Abramov", src: "https://bit.ly/dan-abramov" },
  { name: "Prosper Otemuyiwa", src: "https://bit.ly/prosper-baba" },
  { name: "Christian Nwamba", src: "https://bit.ly/code-beast" },
];

// Basic Avatar example
export const Basic: Story = {
  render: (args) => (
    <Avatar.Root {...args}>
      <Avatar.Fallback name={users[0].name} />
      <Avatar.Image src={users[0].src} />
    </Avatar.Root>
  ),
};

/**
 * Examples of different sizes
 */
export const Sizes: Story = {
  render: (args) => (
    <HStack gap="3">
      <For each={["xs", "sm", "md", "lg", "xl", "2xl"]}>
        {(size) => (
          <Stack key={size} align="center" gap="2">
            <Avatar.Root {...args} size={size}>
              <Avatar.Fallback name={users[0].name} />
              <Avatar.Image src={users[0].src} />
            </Avatar.Root>
            <Text fontSize="xs">{size}</Text>
          </Stack>
        )}
      </For>
    </HStack>
  ),
};

/**
 * Examples of different variants
 */
export const Variants: Story = {
  render: (args) => (
    <HStack gap="3">
      <For each={["solid", "outline", "subtle"]}>
        {(variant) => (
          <Stack key={variant} align="center" gap="2">
            <Avatar.Root {...args} variant={variant}>
              <Avatar.Fallback name={users[0].name} />
              <Avatar.Image src={users[0].src} />
            </Avatar.Root>
            <Text fontSize="xs">{variant}</Text>
          </Stack>
        )}
      </For>
    </HStack>
  ),
};

/**
 * Examples of different shapes
 */
export const Shapes: Story = {
  render: (args) => (
    <HStack gap="4">
      <Stack align="center" gap="2">
        <Avatar.Root {...args} shape="square" size="lg">
          <Avatar.Fallback name={users[3].name} />
          <Avatar.Image src={users[3].src} />
        </Avatar.Root>
        <Text fontSize="xs">square</Text>
      </Stack>
      <Stack align="center" gap="2">
        <Avatar.Root {...args} shape="rounded" size="lg">
          <Avatar.Fallback name={users[0].name} />
          <Avatar.Image src={users[0].src} />
        </Avatar.Root>
        <Text fontSize="xs">rounded</Text>
      </Stack>
      <Stack align="center" gap="2">
        <Avatar.Root {...args} shape="full" size="lg">
          <Avatar.Fallback name="Random User" />
          <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
        </Avatar.Root>
        <Text fontSize="xs">full</Text>
      </Stack>
    </HStack>
  ),
};

/**
 * Avatar with different color palettes
 */
export const Colors: Story = {
  render: (args) => {
    const colorPalettes = [
      "gray",
      "red",
      "green",
      "blue",
      "teal",
      "pink",
      "purple",
      "cyan",
      "orange",
      "yellow",
    ];

    return (
      <Stack gap="4" align="flex-start">
        {colorPalettes.map((colorPalette) => (
          <Stack key={colorPalette} align="center" direction="row" gap="6">
            <Text minW="8ch" fontSize="sm">
              {colorPalette}
            </Text>
            <Avatar.Root {...args} colorPalette={colorPalette}>
              <Avatar.Fallback name={users[0].name} />
              <Avatar.Image src={users[0].src} />
            </Avatar.Root>
            <Avatar.Root {...args} colorPalette={colorPalette}>
              <Avatar.Fallback name={users[0].name} />
            </Avatar.Root>
            <Avatar.Root {...args} colorPalette={colorPalette}>
              <Avatar.Fallback />
            </Avatar.Root>
          </Stack>
        ))}
      </Stack>
    );
  },
};

/**
 * Fallbacks when image fails to load
 */
export const Fallbacks: Story = {
  render: (args) => (
    <HStack gap="3">
      <Stack align="center" gap="2">
        <Avatar.Root {...args}>
          <Avatar.Fallback name="Oshigaki Kisame" />
          <Avatar.Image src="https://bit.ly/broken-link" />
        </Avatar.Root>
        <Text fontSize="xs">With name</Text>
      </Stack>

      <Stack align="center" gap="2">
        <Avatar.Root {...args} colorPalette="teal">
          <Avatar.Fallback name="Sasuke Uchiha" />
          <Avatar.Image src="https://bit.ly/broken-link" />
        </Avatar.Root>
        <Text fontSize="xs">Teal</Text>
      </Stack>

      <Stack align="center" gap="2">
        <Avatar.Root {...args} colorPalette="red">
          <Avatar.Fallback />
          <Avatar.Image src="https://bit.ly/broken-link" />
        </Avatar.Root>
        <Text fontSize="xs">No name</Text>
      </Stack>
    </HStack>
  ),
};

/**
 * Avatar group example
 */
export const AvatarGroups: Story = {
  render: (args) => (
    <AvatarGroup size="md">
      {users.map((user, index) => (
        <Avatar.Root key={index} {...args}>
          <Avatar.Fallback name={user.name} />
          <Avatar.Image src={user.src} />
        </Avatar.Root>
      ))}
    </AvatarGroup>
  ),
};

/**
 * Avatar with badge example
 */
export const WithBadge: Story = {
  render: (args) => (
    <HStack gap="4">
      <Avatar.Root {...args} size="lg">
        <Avatar.Fallback name={users[0].name} />
        <Avatar.Image src={users[0].src} />
        <Float placement="bottom-end" offsetX="1" offsetY="1">
          <Circle
            bg="green.500"
            size="8px"
            outline="0.2em solid"
            outlineColor="bg"
          />
        </Float>
      </Avatar.Root>

      <Avatar.Root {...args} size="lg">
        <Avatar.Fallback name={users[1].name} />
        <Avatar.Image src={users[1].src} />
        <Float placement="bottom-end" offsetX="1" offsetY="1">
          <Circle
            bg="green.500"
            size="8px"
            outline="0.2em solid"
            outlineColor="bg"
          />
        </Float>
      </Avatar.Root>

      <Avatar.Root {...args} size="lg">
        <Avatar.Fallback name={users[2].name} />
        <Avatar.Image src={users[2].src} />
        <Float placement="bottom-end" offsetX="1" offsetY="1">
          <Circle
            bg="green.500"
            size="8px"
            outline="0.2em solid"
            outlineColor="bg"
          />
        </Float>
      </Avatar.Root>

      <Avatar.Root {...args} size="lg">
        <Avatar.Fallback name={users[3].name} />
        <Avatar.Image src={users[3].src} />
        <Float placement="bottom-end" offsetX="1" offsetY="1">
          <Circle
            bg="green.500"
            size="8px"
            outline="0.2em solid"
            outlineColor="bg"
          />
        </Float>
      </Avatar.Root>
    </HStack>
  ),
};
