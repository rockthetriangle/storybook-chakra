import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Box } from "@chakra-ui/react";
import Icons from "../components/atoms/icon/Icons";
import IconBox from "../components/atoms/icon/IconBox";

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

const colorMap = {
  primary: "#CC0000", // Wolfpack Red
  active: "#FFFFFF",  // White (Default)
  dark: "#002438",    // Dark mode
};

const Template = ({ iconName, size, boxColor, showBox, iconColor }) => {
  console.log(`Rendering IconBox with icon: ${iconName}, color: ${iconColor}, size: ${size}`);

  return (
    <IconBox
      iconName={iconName}
      size={size}
      color={colorMap[iconColor] || colorMap.primary}
      backgroundColor={showBox ? boxColor : "transparent"}
      padding={showBox ? "10px" : "0px"}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  iconName: "HouseIcon",
  size: 25,
  boxColor: "#CC0000",
  showBox: true,
  iconColor: "active",
};
