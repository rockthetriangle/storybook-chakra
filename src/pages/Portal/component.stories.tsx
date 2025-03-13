import ProfilePanel from "@/components/organisms/ProfilePanel";
import PersonalInfo from "@/components/organisms/PersonalInfo";
import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Pages/Portal",
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    children: { control: false },
  },
  args: {
    children: (
      <div style={{ height: "150vh", padding: "2rem" }}>
        <h1>Welcome to the Landing Page</h1>
        <p>
          Future components like search bar and side menu will be integrated
          here.
        </p>
      </div>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PortalPage: Story = {};

const sampleUser = {
  id: "1",
  name: "John Mason",
  email: "john.mason@example.com",
  avatar: "https://i.pravatar.cc/300?u=iu",
};

const WithProfileComponent = () => {
  return (
    <Box width="full">
      <ProfilePanel user={sampleUser} />
    </Box>
  );
};

export const WithProfile: Story = {
  args: {
    children: <WithProfileComponent />,
  },
};

const WithMainContentComponent = () => {
  return (
    <Box width="full">
      <PersonalInfo />
    </Box>
  );
};

export const WithMainContent: Story = {
  args: {
    children: <WithMainContentComponent />,
  },
};
