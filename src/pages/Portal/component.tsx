import { ColorModeProvider } from "@/components/Chakra/color-mode";
import SearchInput from "@/components/molecules/SearchInput";
import Sidebar from "@/components/organisms/Sidebar";
import SidebarMenu from "@/components/organisms/SidebarMenu";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Flex, Link, Text, useToken } from "@chakra-ui/react";

export default function PortalPage({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch theme colors dynamically
  const [bgLight, bgDark] = useToken("colors", [
    "background.default",
    "background._dark",
  ]);
  const bgColor = useColorModeValue(bgLight, bgDark)
  const textColor = useColorModeValue("gray.700", "gray.100");

  return (
    <ColorModeProvider>
      <SidebarMenu sidebar={<Sidebar />}>
        <Flex direction="column" width="100%" minHeight="100vh">
          {/* Header */}
          <Flex
            as="header"
            position="fixed"
            width={"calc(100% - 48px)"}
            marginLeft={12}
            top={0}
            zIndex={10}
            padding={4}
            alignItems="center"
            bg={bgColor}
            transition="all 0.3s"
          >
            <SearchInput />
          </Flex>

          {/* Body Content */}
          <Flex
            as="main"
            minHeight="100vh"
            paddingTop="5rem"
            transition="margin 0.3s"
            bg={bgColor}
            color={textColor} 
          >
            {children}
          </Flex>

          {/* Footer */}
          <Flex
            as="footer"
            padding={4}
            justifyContent="center"
            bg={bgColor}
            transition="all 0.3s"
          >
            <Text fontSize="sm">
              © {new Date().getFullYear()} Your Company. All rights reserved. |
              <Link href="/support" color="blue.500" ml={1}>
                Support
              </Link>
            </Text>
          </Flex>
        </Flex>
      </SidebarMenu>
    </ColorModeProvider>
  );
}
