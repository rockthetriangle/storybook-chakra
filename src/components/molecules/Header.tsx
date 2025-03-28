import {
  useBreakpointValue,
  Flex,
  Stack,
  Tabs,
  useToken,
} from "@chakra-ui/react";
import SearchInput from "@/components/molecules/SearchInput";
import { useColorModeValue } from "./color-mode";
import { GrCube } from "react-icons/gr";
import { LuFiles } from "react-icons/lu";
import { AiFillTool } from "react-icons/ai";

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
  const headerMarginLeft = useBreakpointValue({ base: 10, md: 12 });
  const headerWidth = useBreakpointValue({
    base: "calc(100% - 34px)",
    md: "calc(100% - 48px)",
  });
  // Token values for colors
  const [gray50, gray500, gray600, blue500] = useToken("colors", [
    "gray.50",
    "gray.500",
    "gray.600",
    "blue.500",
  ]);

  // Theme-based values
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
      width={headerWidth}
      marginLeft={headerMarginLeft}
      top={0}
      zIndex={10}
      padding={4}
      alignItems="center"
      transition="all 0.3s"
    >
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
    </Flex>
  );
};
