import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useColorModeValue } from "../molecules/color-mode";

interface SidebarMenuProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ children, sidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const bgColor = useColorModeValue("white", "gray.800");
  const overlayBg = useColorModeValue("blackAlpha.200", "blackAlpha.600");
  const menuIconBg = useColorModeValue("gray.700", "gray.100");
  const menuIconColor = useColorModeValue("gray.100", "gray.700");
  const iconSize = useBreakpointValue({ base: "xs", md: "md" }) as "xs" | "md";

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="relative" height="100vh" overflow="hidden">
      {/* Hamburger Menu Button */}
      {!isOpen && (
        <IconButton
          aria-label="Toggle Menu"
          position="fixed"
          top="4"
          left="4"
          zIndex="20"
          display={"flex"}
          onClick={toggleSidebar}
          bg={menuIconBg}
          color={menuIconColor}
          size={iconSize}
        >
          <CiMenuBurger />
        </IconButton>
      )}

      {/* Sidebar */}
      <Box
        position="fixed"
        left="0"
        top="0"
        height="100vh"
        width="240px"
        bg={bgColor}
        transform={isOpen ? "translateX(0)" : "translateX(-100%)"}
        transition="transform 0.3s ease-in-out"
        zIndex="20"
        boxShadow={isOpen ? "lg" : "none"}
      >
        {sidebar}
      </Box>

      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg={overlayBg}
        display={isOpen ? "block" : "none"}
        onClick={toggleSidebar}
        zIndex="15"
        transition="opacity 0.3s"
        opacity={isOpen ? 1 : 0}
      />

      {/* Main Content */}
      <Box transition="margin 0.3s ease-in-out" height="100vh" overflow="auto">
        {children}
      </Box>
    </Box>
  );
};

export default SidebarMenu;
