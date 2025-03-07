import type { Meta, StoryObj } from "@storybook/react";
import type { User } from "@/components/molecules/UserCard";
import ProfilePanel from "@/components/organisms/ProfilePanel";
import { Stack } from "@chakra-ui/react";

const users: User[] = [
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
  title: "Organisms/ProfilePanel",
  component: ProfilePanel,
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
      description: "User data for the ProfilePanel",
    },
  },
} satisfies Meta<typeof ProfilePanel>;

export default meta;
type Story = StoryObj<typeof ProfilePanel>;

export const Basic: Story = {
  render: (args) => <ProfilePanel {...args} />,
};

export const MultipleUsers: Story = {
  render: () => (
    <Stack gap="6">
      {users.map((user) => (
        <ProfilePanel key={user.id} user={user} />
      ))}
    </Stack>
  ),
};
