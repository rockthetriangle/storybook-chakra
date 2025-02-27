import { Flex, Text } from "@chakra-ui/react";
import IconBox from "../atoms/icon/IconBox";
import Icons from "../atoms/icon/Icons";

interface MenuItemProps {
  label: string;
  isActive?: boolean;
  iconName: keyof typeof Icons;
  themeMode?: "light" | "dark";
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  isActive = false,
  iconName,
  themeMode = "light",
  ...props
}) => {
  const iconColor = isActive ? "white" : themeMode === "dark" ? "#F1F1F1" : "#CC0000";
  const boxBg = isActive ? (themeMode === "dark" ? "#002438" : "#CC0000") : "transparent";
  const textColor = themeMode === "dark" ? "#F1F1F1" : "black";

  return (
    <Flex
      align="center"
      p={3}
      cursor="pointer"
      boxShadow={isActive ? "0px 7px 11px 0px rgba(0, 0, 0, 0.04)" : "transparent"}
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "0px 7px 11px 0px rgba(0, 0, 0, 0.04)",
        transition: "0.2s ease-in-out",
      }}
      {...props}
    >
      <IconBox iconName={iconName} size={17} color={iconColor} backgroundColor={boxBg} />
      <Text ml={3} color={textColor}>
        {label}
      </Text>
    </Flex>
  );
};

export default MenuItem;
