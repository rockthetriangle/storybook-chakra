import {
  HStack,
  Input,
  Button,
  useBreakpointValue,
  useToken,
  Stack,
  Tabs,
} from "@chakra-ui/react";
import { InputGroup } from "./input-group";
import { Search } from "react-feather";
import { useColorModeValue } from "./color-mode";
import { GrCube } from "react-icons/gr";
import { LuFiles } from "react-icons/lu";
import { AiFillTool } from "react-icons/ai";

interface SearchInputProps {
  placeholder?: string;
  showTabs?: boolean;
}

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

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  showTabs = false,
}) => {
  // Token values for colors
  const [
    red100,
    red200,
    gray50,
    gray100,
    gray500,
    gray600,
    gray800,
    blue500,
    blue700,
  ] = useToken("colors", [
    "red.100",
    "red.200",
    "gray.50",
    "gray.100",
    "gray.500",
    "gray.600",
    "gray.800",
    "blue.500",
    "blue.700",
  ]);

  // Theme-based values
  const buttonBg = useColorModeValue(
    `linear-gradient(to bottom, ${red100}, ${red200})`,
    gray100
  );
  const buttonColor = useColorModeValue("white", gray800);
  const inputBg = useColorModeValue(gray100, blue700);
  const inputColor = useColorModeValue(gray800, gray100);
  const inputPlaceHolderColor = useColorModeValue("#999", gray100);
  const iconColor = useToken("colors", inputPlaceHolderColor)[0];
  const activeTabBg = useColorModeValue(gray600, blue500);
  const tabColor = useColorModeValue(gray500, gray50);

  // Responsive values
  const buttonWidth = useBreakpointValue({ base: "auto", md: 160 });
  const inputGroupWidth = useBreakpointValue({ base: "auto", lg: 469 });
  const hStackGap = useBreakpointValue({ base: 2, md: 4 });
  const size = useBreakpointValue<"xs" | "md">({ base: "xs", md: "md" });
  const iconSize = useBreakpointValue({ base: 14, md: 18 });
  const stackDirection = useBreakpointValue<"column" | "row">({
    base: "column",
    md: "row",
  });
  const stackGap = useBreakpointValue({ base: 4, md: 10 });

  return (
    <Stack
      width="full"
      align="center"
      justify="center"
      direction={stackDirection}
      gap={stackGap}
    >
      <HStack gap={hStackGap} align="center" justify="center" width="full">
        <InputGroup
          flex="1"
          startElement={<Search size={iconSize} color={iconColor} />}
          bg={inputBg}
          width={inputGroupWidth}
          maxWidth={469}
          height={35}
        >
          <Input
            placeholder={placeholder}
            size={size}
            height={35}
            color={inputColor}
            _placeholder={{ color: inputPlaceHolderColor }}
            border="none"
            focusRing="none"
          />
        </InputGroup>

        <Button
          bg={buttonBg}
          color={buttonColor}
          size={size}
          height={35}
          width={buttonWidth}
          fontWeight="bold"
          textTransform="uppercase"
        >
          Search
        </Button>
      </HStack>
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
  );
};

export default SearchInput;
