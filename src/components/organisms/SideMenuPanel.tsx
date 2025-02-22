import { Box, Image, Button, VStack, Text, Flex } from "@chakra-ui/react";
import * as Chakra from "@chakra-ui/react";
import Icons from "../atoms/icon/Icons";
import HelpIcon from "../../assets/icons/help.svg";

const WolfIcon = Icons.WolfIcon;

import SidebarMenu from "../molecules/SidebarMenu";

interface SideMenuPanelProps {
  themeMode?: "light" | "dark";
}

const SideMenuPanel: React.FC<SideMenuPanelProps> = ({ themeMode = "light" }) => {
  const bgColor = themeMode === "dark" ? "#F1F1F1" : "white";
  const textColor = themeMode === "dark" ? "white" : "black";

  return (
    <Box w="250px" h="100vh" p={4} bg={bgColor} color={textColor} display="flex" flexDirection="column">
      
      {/* Logo Section */}
      <Flex align="center" mb={4}>
        <WolfIcon boxSize="29px" color="#cc0000" />
        <Text fontSize="xl" fontWeight="bold" ml={2}>
          Logo
        </Text>
      </Flex>

      {/* Sidebar Menu */}
      <SidebarMenu
        themeMode={themeMode}
        items={[
          { name: "HouseIcon", label: "Home", isActive: true },
          { name: "LandmarkIcon", label: "Places" },
          { name: "LeaderIcon", label: "People" },
          { name: "ProfileIcon", label: "Profile" },
          { name: "ToolsIcon", label: "Settings" },
          { name: "ArrowsIcon", label: "Sign Out" },
        ]}
      />

      {/* Bottom Help Section */}
      <VStack spacing={2} textAlign="center">
      	<Image src={HelpIcon} alt="Help Icon" boxSize="100px" />
        <Text fontSize="sm" color="gray.500">
          Need Help? <br /> Please check our docs
        </Text>
        <Button bg="#12394D" color="white" size="sm" _hover={{ bg: "#0F2A3E" }}>
          DOCUMENTATION
        </Button>
      </VStack>
    </Box>
  );
};

export default SideMenuPanel;
