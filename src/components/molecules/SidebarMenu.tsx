// src/components/organisms/SidebarMenu.tsx
import { Box } from "@chakra-ui/react";
import MenuItem from "../molecules/MenuItem";
import Icons from "../atoms/icon/Icons";

interface SidebarMenuProps {
  items: { 
    name: keyof typeof Icons; 
    label: string;
    isActive?: boolean;
  }[];
  themeMode?: "light" | "dark";
}

const SidebarMenu = ({ items, themeMode = "light" }: SidebarMenuProps) => {
  const bgColor = themeMode === "dark" ? "#12394D" : "white";
  const textColor = themeMode === "dark" ? "white" : "black";

  return (
    <Box w="250px" p={4} bg={bgColor} color={textColor}>
      {items.map((item, index) => (
        <MenuItem 
          key={index} 
          iconName={item.name} 
          label={item.label} 
          isActive={item.isActive} 
          themeMode={themeMode}
        />
      ))}
    </Box>
  );
};

export default SidebarMenu;
