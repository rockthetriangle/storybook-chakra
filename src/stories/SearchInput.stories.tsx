// src/stories/SearchInput.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@chakra-ui/react";
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
  render: ({ placeholder, themeMode }) => (
    <Box 
      bg={themeMode === "dark" ? "#12394D" : "white"} 
      p={4} 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
      height="20vh"
    >
      <SearchInput 
        placeholder={placeholder} 
        inputBg={themeMode === "dark" ? "#12394D" : "white"} 
        inputColor={themeMode === "dark" ? "#F1F1F1" : "black"}
        buttonBg={themeMode === "dark" ? "#F1F1F1" : "#cc0000"}
        buttonColor={themeMode === "dark" ? "#333333" : "white"}
      />
    </Box>
  ),
};
