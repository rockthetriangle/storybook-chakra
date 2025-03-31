import { ColorModeProvider } from "@/components/molecules/color-mode";
import { useColorModeValue } from "@/components/molecules/color-mode";
import { Flex, Link, Text, useToken } from "@chakra-ui/react";
import { Header } from "@/components/molecules/Header";

export default function PortalPage({
  children,
  showTabs = false,
}: {
  children: React.ReactNode;
  showTabs?: boolean;
}) {
  // Fetch theme colors dynamically
  const [bgLight, bgDark] = useToken("colors", [
    "background.default",
    "background._dark",
  ]);
  const bgColor = useColorModeValue(bgLight, bgDark);
  const textColor = useColorModeValue("gray.700", "gray.100");

  return (
    <ColorModeProvider>
      <Flex direction="column" width="100%" minHeight="100vh">
        {/* Header */}
        <Header showTabs={showTabs} />

        {/* Body Content */}
        <Flex
          as="main"
          minHeight="100vh"
          paddingTop="5rem"
          transition="margin 0.3s"
          bg={bgColor}
          color={textColor}
          bgImage={useColorModeValue(
            "url('/bg-light.png')",
            "url('/bg-dark.png')"
          )}
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
    </ColorModeProvider>
  );
}
