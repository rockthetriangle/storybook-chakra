// src/components/organisms/Sidebar.tsx
import { Box } from "@chakra-ui/react";
import SidebarItem from "../molecules/SidebarItem";
import ICONS from "../../icons/icons";

interface SidebarProps {
  items: { name: keyof typeof ICONS; label: string }[];
}

const Sidebar = ({ items }: SidebarProps) => (
  <Box w="250px" bg="gray.800" color="white" p={4}>
    {items.map((item, index) => (
      <SidebarItem key={index} name={item.name} label={item.label} />
    ))}
  </Box>
);

export default Sidebar;