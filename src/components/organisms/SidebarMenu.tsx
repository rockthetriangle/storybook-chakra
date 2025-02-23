import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useColorModeValue } from "../ui/color-mode";

interface SidebarMenuProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ children, sidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const bgColor = useColorModeValue("white", "gray.800");
  const overlayBg = useColorModeValue("blackAlpha.200", "blackAlpha.600");

  useEffect(() => {
    // Reset sidebar state when screen size changes
    setIsOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="relative" height="100vh" overflow="hidden">
      {/* Hamburger Menu Button */}
      <IconButton
        aria-label="Toggle Menu"
        position="fixed"
        top="4"
        left="4"
        zIndex="30"
        display={{ base: "flex", md: "none" }}
        onClick={toggleSidebar}
      >
        <CiMenuBurger />
      </IconButton>

      {/* Sidebar */}
      <Box
        position="fixed"
        left="0"
        top="0"
        height="100vh"
        width={{ base: "240px", md: "240px" }}
        bg={bgColor}
        transform={{
          base: isOpen ? "translateX(0)" : "translateX(-100%)",
          md: "translateX(0)",
        }}
        transition="transform 0.3s ease-in-out"
        zIndex="20"
        boxShadow={isOpen ? "lg" : "none"}
      >
        {/* Close Button (Mobile Only) */}
        <IconButton
          aria-label="Close Menu"
          position="absolute"
          right="4"
          top="4"
          display={{ base: "flex", md: "none" }}
          onClick={toggleSidebar}
        >
          <IoMdClose />
        </IconButton>

        {sidebar}
      </Box>

      {/* Overlay (Mobile Only) */}
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg={overlayBg}
        display={{ base: isOpen ? "block" : "none", md: "none" }}
        onClick={toggleSidebar}
        zIndex="15"
        transition="opacity 0.3s"
        opacity={isOpen ? 1 : 0}
      />

      {/* Main Content */}
      <Box
        marginLeft={{ base: 0, md: "240px" }}
        transition="margin 0.3s ease-in-out"
        height="100vh"
        overflow="auto"
      >
        {children}
      </Box>
    </Box>
  );
};

export default SidebarMenu;
