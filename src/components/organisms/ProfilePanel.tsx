import { Box, For, Tabs } from "@chakra-ui/react";
import { useColorModeValue } from "../molecules/color-mode";
import { User, UserCard } from "../molecules/UserCard";
import { IoIosCube } from "react-icons/io";
import { PiFilesFill } from "react-icons/pi";
import { AiOutlineTool } from "react-icons/ai";

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

const ProfilePanel = ({ user }: { user: User }) => {
  return (
    <Box
      display="flex"
      gap="20"
      alignItems="center"
      justifyContent={"space-between"}
      width="full"
      p={4}
      bg={useColorModeValue("white", "blue.700")}
    >
      <UserCard user={user} />
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
  );
};

export default ProfilePanel;
