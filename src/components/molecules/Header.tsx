import SearchInput from "@/components/molecules/SearchInput";
import {
  Button,
  Flex,
  Menu,
  Portal,
  Stack,
  Tabs,
  useBreakpointValue,
  useToken,
} from "@chakra-ui/react";
import { AiFillTool } from "react-icons/ai";
import { FaChevronDown, FaSignOutAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { GrCube } from "react-icons/gr";
import { IoMdHelpCircle } from "react-icons/io";
import { LuFiles } from "react-icons/lu";
import { Avatar } from "../atoms/Avatar";
import Sidebar from "../organisms/Sidebar";
import SidebarMenu from "../organisms/SidebarMenu";
import { useColorMode, useColorModeValue } from "./color-mode";

const TABS = [
  {
    value: "Doors",
    icon: <GrCube />,
  },
  {
    value: "Groups",
    icon: <LuFiles />,
  },
  {
    value: "Actions",
    icon: <AiFillTool />,
  },
];

export const Header = ({ showTabs }: { showTabs?: boolean }) => {
  const { colorMode } = useColorMode();
  // Token values for colors
  const [gray50, gray100, gray500, gray600, blue500, blue600] = useToken(
    "colors",
    ["gray.50", "gray.100", "gray.500", "gray.600", "blue.500", "blue.600"]
  );

  // Theme-based values
  const headerBg = useColorModeValue(gray100, blue600);
  const activeTabBg = useColorModeValue(gray600, blue500);
  const tabColor = useColorModeValue(gray500, gray50);

  // Responsive values
  const stackDirection = useBreakpointValue<"column" | "row">({
    base: "column",
    md: "row",
  });
  const stackGap = useBreakpointValue({ base: 4, md: 10 });

  return (
    <Flex
      as="header"
      position="fixed"
      width={"100%"}
      top={0}
      zIndex={10}
      py={2}
      px={4}
      alignItems="center"
      transition="all 0.3s"
      bg={headerBg}
    >
      <SidebarMenu sidebar={<Sidebar />} />
      <Stack
        width="full"
        align="center"
        justify="center"
        direction={stackDirection}
        gap={stackGap}
      >
        <SearchInput />
        {showTabs && (
          <Tabs.Root
            defaultValue="Doors"
            variant="subtle"
            color={gray50}
            height={35}
            border={`3px solid ${activeTabBg}`}
          >
            <Tabs.List>
              {TABS.map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  height={30}
                  borderRadius={0}
                  fontWeight="bold"
                  color={tabColor}
                  _selected={{ bg: activeTabBg, color: gray50 }}
                >
                  {tab.icon}
                  {tab.value}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </Tabs.Root>
        )}
      </Stack>

      <Menu.Root>
        <Menu.Trigger asChild className={colorMode}>
          <Button
            variant="outline"
            size="sm"
            pl={0}
            pr={2}
            py={2}
            rounded="full"
          >
            <Avatar
              name="Henry"
              size="xs"
              src="https://avatar.iran.liara.run/public/boy?username=Henry"
            />
            <FaChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content className={colorMode}>
              <Menu.Item value="settings">
                <FaGear />
                <span>Settings</span>
              </Menu.Item>
              <Menu.Item value="signout">
                <FaSignOutAlt />
                <span>Sign Out</span>
              </Menu.Item>
              <Menu.Item value="help">
                <IoMdHelpCircle size={17} />
                <span>Help</span>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Flex>
  );
};
