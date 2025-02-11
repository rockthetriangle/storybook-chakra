import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@chakra-ui/react";
import SideMenuPanel from "../components/organisms/SideMenuPanel";

const meta: Meta<typeof SideMenuPanel> = {
  title: "Organisms/SideMenuPanel",
  component: SideMenuPanel,
  argTypes: {
    themeMode: {
      control: "radio",
      options: ["light", "dark"],
      defaultValue: "light",
    },
  },
};

export default meta;

export const Interactive: StoryObj<typeof SideMenuPanel> = {
  args: {
    themeMode: "light",
  },
  render: ({ themeMode }) => (
    <Box
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg={themeMode === "dark" ? "#1A202C" : "white"}
    >
      <SideMenuPanel themeMode={themeMode} />
    </Box>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Box
  							p={4}
								display="flex"
  							justifyContent="center"
  							alignItems="center"
  							height="100vh"
  							bg={themeMode === "dark" ? "#1A202C" : "white"}
							>
  							<SideMenuPanel themeMode={themeMode} />
							</Box>`,
        language: "tsx", // Ensure syntax highlighting for TypeScript
      },
    },
  },
};
