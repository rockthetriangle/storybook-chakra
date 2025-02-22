import React from "react";
import { Meta } from "@storybook/react";
import { Box } from "@chakra-ui/react";
import Icons from "../components/atoms/icon/Icons";
import IconBox from "../components/atoms/icon/IconBox";
import { theme } from "@/providers/ThemeProvider";

console.log("Available Icons:", Object.keys(Icons));

export default {
  title: "Atoms/Icons",
  component: IconBox,
  argTypes: {
    iconName: {
      control: { type: "select" },
      options: Object.keys(Icons),
    },
    size: { control: { type: "number", min: 10, max: 100, step: 5 } },
    boxColor: { control: "color" },
    showBox: { control: "boolean" },
    iconColor: {
      control: { type: "select" },
      options: ["primary", "active", "dark"],
    },
  },
} as Meta;

export const Default = ({ iconName, size, boxColor, showBox, iconColor }) => {
  if (!theme || !theme.token) {
    return <Box color="red.500">Error: Theme not loaded properly</Box>;
  }

  const colorTokens = {
    primary: theme.token("colors.red.500", "#CC0000"), // Wolfpack Red
    active: theme.token("colors.gray.100", "#FFFFFF"), // White
    dark: theme.token("colors.blue.900", "#002438"), // Dark mode
  };

  console.log(`Rendering IconBox with icon: ${iconName}, color: ${iconColor}, size: ${size}`);

  return (
    <IconBox
      iconName={iconName}
      size={size}
      color={colorTokens[iconColor] || colorTokens.primary}
      backgroundColor={showBox ? boxColor : "transparent"}
      padding={showBox ? "10px" : "0px"}
    />
  );
};

Default.args = {
  iconName: "HouseIcon",
  size: 25,
  boxColor: "#CC0000",
  showBox: true,
  iconColor: "active",
};
