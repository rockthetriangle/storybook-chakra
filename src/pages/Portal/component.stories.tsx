import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";
import { UserCard } from "@/components/molecules/UserCard";
import { Box, For, Tabs } from "@chakra-ui/react";
import { IoIosCube } from "react-icons/io";
import { PiFilesFill } from "react-icons/pi";
import { AiOutlineTool } from "react-icons/ai";
import { useColorModeValue } from "@/components/ui/color-mode";

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
  const tabs = [
    {
      icon: <IoIosCube />,
      label: "Overview",
      value: "overview",
    },
    {
      icon: <PiFilesFill />,
      label: "Groups",
      value: "groups",
    },
    {
      icon: <AiOutlineTool />,
      label: "Actions",
      value: "actions",
    },
  ];

  return (
    <Box width="full">
      <Box
        display="flex"
        gap="20"
        alignItems="center"
        justifyContent={"space-between"}
        width="full"
        p={4}
        bg={useColorModeValue("white", "blue.700")}
      >
        <UserCard user={sampleUser} />
        <Tabs.Root size="lg" defaultValue={"overview"} variant={"enclosed"}>
          <Tabs.List bg={"transparent"}>
            <For each={tabs}>
              {(tab) => (
                <Tabs.Trigger
                  value={tab.value}
                  _selected={{
                    bg: useColorModeValue("blue.800", "gray.50"),
                    color: useColorModeValue("gray.50", "blue.800"),
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </Tabs.Trigger>
              )}
            </For>
          </Tabs.List>
        </Tabs.Root>
      </Box>
    </Box>
  );
};

export const WithProfile: Story = {
  args: {
    children: <WithProfileComponent />,
  },
};
