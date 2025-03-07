import React from "react";
import { Flex, Icon, Text, Link, FlexProps, useToken } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useColorModeValue } from "./color-mode";

export interface MenuItemProps extends FlexProps {
  icon: IconType;
  children: string;
  isActive?: boolean;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  children,
  isActive = false,
  href = "#",
  ...rest
}) => {
  const [primaryLight, primaryDark] = useToken("colors", [
    "primary.default",
    "gray.100",
  ]);
  const activeBg = useColorModeValue(primaryLight, primaryDark);
  const activeColor = useColorModeValue("white", "blue.800");
  const inactiveColor = useColorModeValue("gray.600", "gray.300");
  const textColor = useColorModeValue("gray.700", "gray.100")

  return (
    <Link
      href={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        w="full"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        transition="all 0.2s"
        boxShadow={
          isActive ? "0px 7px 11px 0px rgba(0, 0, 0, 0.04)" : "transparent"
        }
        _hover={{
          transform: "scale(1.05)",
          boxShadow: "0px 7px 11px 0px rgba(0, 0, 0, 0.04)",
          transition: "0.2s ease-in-out",
        }}
        {...rest}
      >
        {icon && (
          <Flex
            width={"29px"}
            height={"29px"}
            mr="4"
            bg={isActive ? activeBg : "transparent"}
            color={isActive ? activeColor : inactiveColor}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"sm"}
          >
            <Icon
              fontSize="16"
              transition="all 0.2s"
              _groupHover={{
                color: "inherit",
              }}
              as={icon}
            />
          </Flex>
        )}
        <Text color={textColor} fontSize="md">
          {children}
        </Text>
      </Flex>
    </Link>
  );
};

export default MenuItem;
