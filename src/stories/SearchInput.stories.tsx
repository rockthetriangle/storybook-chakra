import { Meta, StoryObj } from "@storybook/react";
import { Box, useToken } from "@chakra-ui/react";
import SearchInput from "../components/molecules/SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Molecules/SearchInput",
  component: SearchInput,
  argTypes: {
    placeholder: { control: "text", defaultValue: "Search..." },
    themeMode: { 
      control: "radio",
      options: ["light", "dark"],
      defaultValue: "light",
    },
  },
};

export default meta;

export const Interactive: StoryObj<typeof SearchInput> = {
  args: {
    placeholder: "Search by Unity ID or Campus ID", 
    themeMode: "light",
  },
  render: ({ placeholder, themeMode }) => {
    const [bgLight, bgDark] = useToken("colors", ["gray.50", "gray.800"]);
    const [textLight, textDark] = useToken("colors", ["gray.900", "white"]);
    const [buttonLight, buttonDark] = useToken("colors", ["red.500", "red.300"]);
    const [hoverLight, hoverDark] = useToken("colors", ["red.600", "red.400"]);
		console.log("🎨 Debug Theme Tokens: ", {
      bgLight, bgDark, textLight, textDark, buttonLight, buttonDark, hoverLight, hoverDark
    });
    return (
      <Box 
        bg={themeMode === "dark" ? bgDark : bgLight} 
        p={4} 
        display="flex" 
        justifyContent="center" 
        alignItems="center"
        height="20vh"
      >
        <SearchInput 
          placeholder={placeholder} 
          inputBg={themeMode === "dark" ? bgDark : bgLight}
          inputColor={themeMode === "dark" ? textDark : textLight}
          buttonBg={themeMode === "dark" ? buttonDark : buttonLight}
          buttonColor={themeMode === "dark" ? textDark : textLight}
        />
      </Box>
    );
  },
};
