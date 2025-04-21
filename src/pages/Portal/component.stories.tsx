import ProfilePanel from "@/components/organisms/ProfilePanel";
import UserDetails from "@/components/organisms/UserDetails";
import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";
import { SearchGuideCard } from "@/components/molecules/SearchGuideCard";

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

export const WithHeaderTabs: Story = {
  args: {
    showTabs: true,
  },
};

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
      <ProfilePanel user={sampleUser} />
      <UserDetails />
    </Box>
  );
};

export const WithMainContent: Story = {
  args: {
    children: <WithMainContentComponent />,
  },
};

const WithSearchGuideCardComponent = () => {
  return (
    <Box
      width={"full"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
    >
      <SearchGuideCard
        iconSrc="/icons/search-people-group.png"
        title="Search People"
        description="Look up someone using their CampusID or full name."
      />
    </Box>
  );
};

export const WithSearchGuideCard: Story = {
  args: {
    children: <WithSearchGuideCardComponent />,
  },
};
