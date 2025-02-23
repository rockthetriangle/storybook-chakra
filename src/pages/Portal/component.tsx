import React, { useEffect, useState } from 'react';
import {
    Flex,
    Spacer,
    Image,
    Text,
    IconButton,
    Link,
    useBreakpointValue,
    useToken,
    Box,
} from '@chakra-ui/react';
import { CiMenuBurger } from 'react-icons/ci';
import { ColorModeProvider, ColorModeButtonExtended } from '@/components/Chakra/color-mode';
import SearchInput from '@/components/molecules/SearchInput';
import Sidebar from '@/components/organisms/Sidebar';
import SidebarMenu from '@/components/organisms/SidebarMenu';

export default function PortalPage({ logo, navbarItems, children }) {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

    // Fetch theme colors dynamically
    const [bgLight, bgDark] = useToken("colors", ["background.default", "background._dark"]);
    const [textLight, textDark] = useToken("colors", ["text.default", "text._dark"]);
    const [buttonBgLight, buttonBgDark] = useToken("colors", ["buttonBg.default", "buttonBg._dark"]);
    const [hoverLight, hoverDark] = useToken("colors", ["buttonHover.default", "buttonHover._dark"]);

    useEffect(() => {
        setIsSidebarOpen(!isMobile);
    }, [isMobile]);

    return (
        <ColorModeProvider>
            <SidebarMenu sidebar={<Sidebar />}>
            <Flex direction="column" width="100%" minHeight="100vh">
                {/* Header */}
                <Flex 
                    as="header" 
                    position="fixed" 
                    width={{  md: "calc(100% - 240px)" }}
                    marginLeft={{ base: 12, md: 0 }}
                    top={0} 
                    zIndex={10} 
                    padding={4} 
                    alignItems="center" 
                    bg={bgLight} 
                    _dark={{ bg: bgDark }}
                    transition="all 0.3s"
                >
                    <SearchInput 
                    />
                </Flex>

                {/* Body Content */}
                <Flex 
                    as="main" 
                    minHeight="100vh" 
                    paddingTop="5rem" 
                    paddingX={8}
                    // marginLeft={{ base: 0, md: isSidebarOpen ? "240px" : 0 }}
                    transition="margin 0.3s"
                    bg={bgLight} 
                    _dark={{ bg: bgDark }}
                >
                    {children}
                </Flex>

                {/* Footer */}
                <Flex 
                    as="footer" 
                    // width={isSidebarOpen ? { base: "100%", md: "calc(100% - 240px)" } : "100%"}
                    // marginLeft={isSidebarOpen ? { base: 0, md: "240px" } : 0}
                    padding={4} 
                    justifyContent="center" 
                    bg={bgLight} 
                    _dark={{ bg: bgDark }}
                    transition="all 0.3s"
                >
                    <Text fontSize="sm">
                        © {new Date().getFullYear()} Your Company. All rights reserved. | 
                        <Link href="/support" color="blue.500" ml={1}>Support</Link>
                    </Text>
                </Flex>
            </Flex>
            </SidebarMenu>
        </ColorModeProvider>
    );
}