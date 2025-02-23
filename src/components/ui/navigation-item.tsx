import { HStack, Text, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavigationItemProps {
  icon: IconType;
  label: string;
  isActive?: boolean;
}

export const NavigationItem = ({
  icon,
  label,
  isActive,
}: NavigationItemProps) => (
  <HStack
    px={4}
    py={2}
    cursor="pointer"
    bg={isActive ? "red.50" : "transparent"}
    color={isActive ? "red.500" : "gray.700"}
    _hover={{ bg: "red.50" }}
  >
    <Icon as={icon} />
    <Text>{label}</Text>
  </HStack>
);
