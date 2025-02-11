import { Meta, StoryObj } from "@storybook/react";
import { Box, Flex, Image } from "@chakra-ui/react";
import SideMenuPanel from "../components/organisms/SideMenuPanel";
import SearchInput from "../components/molecules/SearchInput";

const meta: Meta = {
  title: "Pages/Portal",
  component: SideMenuPanel,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    themeMode: {
      control: "radio",
      options: ["light", "dark"],
      defaultValue: "light",
    },
    placeholder: {
      control: "text",
      defaultValue: "Search by Unity ID or Campus ID",
    },
  },
};

export default meta;

export const Portal: StoryObj = {
  args: {
    themeMode: "light",
  },
  render: ({ themeMode, placeholder }) => (
    <Box width="100vw" height="100vh" display="flex">
      {/* Sidebar Panel */}
      <SideMenuPanel themeMode={themeMode} />

      {/* Main Content Area */}
      <Box flex="1" position="relative">
        {/* Background Image - Top 1/3 of the Page */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="33vh"
          bgImage="url('/assets/background-pattern.png')"
          bgSize="cover"
          bgRepeat="no-repeat"
          zIndex="-1"
        />

        {/* Search Bar */}
        <Flex
          p={4}
          align="center"
          justify="space-between"
          bg="transparent"
        >
          <Box flex="1">
            <SearchInput
              placeholder={placeholder}
              inputBg="white"
              inputColor="black"
              buttonBg="#cc0000"
              buttonColor="white"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  ),
};
