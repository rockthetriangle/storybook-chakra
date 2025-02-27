import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";
import { UserCard } from "@/components/molecules/UserCard";
import { Box, Tabs } from "@chakra-ui/react";
import { IoIosCube } from "react-icons/io";
import { PiFilesFill } from "react-icons/pi";
import { AiOutlineTool } from "react-icons/ai";

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

export const WithProfile: Story = {
  args: {
    children: (
      <Box
        display="flex"
        gap="20"
        alignItems="start"
        justifyContent={"space-between"}
        width="full"
        p={4}
      >
        <UserCard user={sampleUser} />
        <Tabs.Root size="lg" defaultValue={"overview"} variant={"enclosed"}>
          <Tabs.List>
            <Tabs.Trigger value="overview">
              <IoIosCube />
              Overview
            </Tabs.Trigger>
            <Tabs.Trigger value="groups">
              <PiFilesFill />
              Groups
            </Tabs.Trigger>
            <Tabs.Trigger value="actions">
              <AiOutlineTool />
              Actions
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </Box>
    ),
  },
};
