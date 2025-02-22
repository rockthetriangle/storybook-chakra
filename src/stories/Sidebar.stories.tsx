import SidebarMenu from "../components/molecules/SidebarMenu";
import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@chakra-ui/react";

const meta: Meta<typeof SidebarMenu> = {
  title: "Molecules/SidebarMenu",
  component: SidebarMenu,
  argTypes: {
    themeMode: {
      control: "radio",
      options: ["light", "dark"],
      defaultValue: "light",
    },
  },
};

export default meta;

export const Interactive: StoryObj<typeof SidebarMenu> = {
  args: {
    themeMode: "light",
  },
  render: ({ themeMode }) => (
    <Box
      bg={themeMode === "dark" ? "#1A202C" : "white"}
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="30vh"
    >
      <SidebarMenu
        themeMode={themeMode}
        items={[
          { name: "HouseIcon", label: "Home", isActive: true },
          { name: "LandmarkIcon", label: "Places" },
        ]}
      />
    </Box>
  ),
};
