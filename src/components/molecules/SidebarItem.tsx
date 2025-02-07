
// src/components/molecules/SidebarItem.tsx
import { Flex } from "@chakra-ui/react";
import Icon from "../atoms/Icon";

interface SidebarItemProps {
  name: keyof typeof ICONS;
  label: string;
  isActive?: boolean;
}

const SidebarItem = ({ name, label, isActive, ...props }: SidebarItemProps) => (
  <Flex
    align="center"
    p={3}
    cursor="pointer"
    bg={isActive ? "gray.700" : "transparent"}
    _hover={{ bg: "gray.600", transform: "scale(1.05)", transition: "0.2s ease-in-out" }}
    {...props}
  >
    <Icon name={name} mr={3} />
    {label}
  </Flex>
);

export default SidebarItem;