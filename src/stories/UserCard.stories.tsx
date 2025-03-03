import { UserCard } from "@/components/molecules/UserCard";
import { For, HStack, Stack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const users = [
  {
    id: "1",
    name: "John Mason",
    email: "john.mason@example.com",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "2",
    name: "Melissa Jones",
    email: "melissa.jones@example.com",
    avatar: "https://i.pravatar.cc/300?u=po",
  },
  {
    id: "3",
    name: "David Wilson",
    email: "david.wilson@example.com",
    avatar: "https://i.pravatar.cc/300?u=dw",
  },
];

const meta = {
  title: "Molecules/UserCard",
  component: UserCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    user: users[0],
  },
  argTypes: {
    user: {
      control: "object",
      description: "User data",
    },
  },
} satisfies Meta<typeof UserCard>;

export default meta;
type Story = StoryObj<typeof UserCard>;

// Basic example
export const Basic: Story = {
  render: (args) => <UserCard {...args} />,
};

// List of user cards
export const UserList: Story = {
  render: () => (
    <Stack gap="4">
      <For each={users}>{(user) => <UserCard key={user.id} user={user} />}</For>
    </Stack>
  ),
};

// Different color palettes
export const ColorVariants: Story = {
  render: (args) => (
    <Stack gap="4">
      <UserCard {...args} />
      <UserCard {...args} />
      <UserCard {...args} />
    </Stack>
  ),
};

// Different card variants
export const CardVariants: Story = {
  render: (args) => (
    <Stack gap="4">
      <UserCard {...args} />
      <UserCard {...args} />
      <UserCard {...args} />
    </Stack>
  ),
};

// Horizontal layout of cards
export const HorizontalLayout: Story = {
  render: () => (
    <HStack gap="4" alignItems="flex-start" flexWrap="wrap">
      <For each={users}>{(user) => <UserCard key={user.id} user={user} />}</For>
    </HStack>
  ),
};
