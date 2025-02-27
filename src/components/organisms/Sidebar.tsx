import {
  Box,
  BoxProps,
  Flex,
  Icon,
  Link,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FiBook,
  FiFileText,
  FiHome,
  FiLogOut,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { WolfIcon } from "../atoms/icon/Icons";
import MenuItem from "../molecules/MenuItem";
import { useColorModeValue } from "../ui/color-mode";
import { ColorModeButtonExtended } from "../Chakra/color-mode";

interface SidebarProps extends BoxProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  const bgColor = useColorModeValue("white", "blue.700");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const helpSectionBg = useColorModeValue("gray.50", "gray.700");
  const helpTextColor = useColorModeValue("gray.600", "gray.300");
  const helpSubTextColor = useColorModeValue("gray.500", "gray.400");
  const docButtonBg = useColorModeValue("gray.700", "gray.600");
  const docButtonHoverBg = useColorModeValue("gray.800", "gray.500");
  const docButtonColor = useColorModeValue("white", "gray.100");
  const textLogoColor = useColorModeValue("gray.700", "gray.100");

  return (
    <Box
      bg={bgColor}
      borderRight="1px"
      borderRightColor={borderColor}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Flex align="center">
          <WolfIcon boxSize="29px" color="#cc0000" />
          <Text fontSize="xl" fontWeight="bold" ml={2} color={textLogoColor}>
            Logo
          </Text>
        </Flex>
      </Flex>
      <Box mb={4} mx={8} >
        <ColorModeButtonExtended variant="line" size="lg" />
      </Box>

      <VStack align="stretch">
        <MenuItem icon={FiHome} isActive href="/">
          Home
        </MenuItem>
        <MenuItem icon={FiFileText} href="/page-one">
          Page One
        </MenuItem>
        <MenuItem icon={FiFileText} href="/page-two">
          Page Two
        </MenuItem>

        <Separator />

        <MenuItem icon={FiUser} href="/profile">
          Profile
        </MenuItem>
        <MenuItem icon={FiSettings} href="/settings">
          Settings
        </MenuItem>
        <MenuItem icon={FiLogOut} href="/signout">
          Sign Out
        </MenuItem>
      </VStack>

      <Box position="absolute" bottom="0" w="full" pb="4">
        <Box px="4">
          <Box p="4" bg={helpSectionBg} borderRadius="lg">
            <Text fontSize="sm" color={helpTextColor} mb="2">
              Need Help?
            </Text>
            <Text fontSize="xs" color={helpSubTextColor} mb="3">
              Please check our docs
            </Text>
            <Link
              href="/documentation"
              bg={docButtonBg}
              color={docButtonColor}
              fontSize="xs"
              p="2"
              borderRadius="md"
              display="inline-block"
              transition="all 0.2s"
              _hover={{
                bg: docButtonHoverBg,
              }}
            >
              <Flex align="center">
                <Icon as={FiBook} mr="2" />
                DOCUMENTATION
              </Flex>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
