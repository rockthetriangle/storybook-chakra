import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";
import Icons from "./Icons";

interface IconBoxProps extends FlexProps {
  iconName: keyof typeof Icons;
  size?: number;
}

const IconBox: React.FC<IconBoxProps> = ({ iconName, size = 6, ...rest }) => {
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found.`);
    return <Flex color="red.500">Invalid Icon</Flex>;
  }

  return (
    <Flex
      align="center"
      justify="center"
      borderRadius="3px"
      width={`${size * 2}px`}
      height={`${size * 2}px`}
      backgroundColor={rest.backgroundColor || "transparent"}
      padding="10px"
      {...rest}
    >
      <IconComponent width={size} height={size} color={rest.color} />
    </Flex>
  );
};

export default IconBox;
