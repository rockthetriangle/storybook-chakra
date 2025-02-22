import React, { useEffect, useState } from 'react';
import {
    Flex, Spacer, Image, Text, IconButton, Link, useBreakpointValue, useToken,
    DrawerRoot, DrawerBackdrop, DrawerTrigger, DrawerContent, DrawerCloseTrigger, DrawerBody
} from '@chakra-ui/react';
import { CiMenuBurger } from 'react-icons/ci';
import { ColorModeProvider, ColorModeButtonExtended } from '@/components/Chakra/color-mode';
import SideMenuPanel from '@/components/organisms/SideMenuPanel';
import SearchInput from '@/components/molecules/SearchInput';
import { theme } from '@/providers/themeProvider';

export default function PortalPage({ logo, navbarItems, children }) {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const [isDrawerOpen, setIsDrawerOpen] = useState(!isMobile);

    // Fetch theme colors dynamically
    const [bgLight, bgDark] = useToken("colors", ["background.default", "background._dark"]);
    const [textLight, textDark] = useToken("colors", ["text.default", "text._dark"]);
    const [buttonBgLight, buttonBgDark] = useToken("colors", ["buttonBg.default", "buttonBg._dark"]);
    const [hoverLight, hoverDark] = useToken("colors", ["buttonHover.default", "buttonHover._dark"]);

    console.log("🎨 Theme Tokens in PortalPage:", { bgLight, bgDark, textLight, textDark, buttonBgLight, buttonBgDark });

    useEffect(() => {
        setIsDrawerOpen(!isMobile);
    }, [isMobile]);

    return (
        <ColorModeProvider>
            <Flex direction="column" width="100%" minHeight="100vh">
                {/* Header */}
                <Flex as="header" position="fixed" width="100%" top={0} zIndex={10} padding={4} alignItems="center" bg={bgLight} _dark={{ bg: bgDark }}>
                    {logo && <Image src={logo} width="42px" alt="Logo" />}
                    <Spacer />
                    <SearchInput 
                        inputBg={bgLight} 
                        inputColor={textLight} 
                        buttonBg={buttonBgLight} 
                        buttonColor={textLight} 
                    />
                    <Spacer />
                    <IconButton
                        icon={<CiMenuBurger />}
                        aria-label="Open Menu"
                        onClick={() => setIsDrawerOpen(true)}
                    />
                </Flex>

                {/* Drawer with Animation */}
                <DrawerRoot open={isDrawerOpen} onOpenChange={(event) => setIsDrawerOpen(event.open)}>
                    <DrawerBackdrop />
                    <DrawerContent animation="slideIn">
                        <DrawerCloseTrigger />
                        <DrawerBody>
                            <Flex direction="column">
                                <ColorModeButtonExtended />
                                <SideMenuPanel onClose={() => setIsDrawerOpen(false)} />
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerRoot>

                {/* Body Content */}
                <Flex as="main" minHeight="100vh" paddingTop="5rem" paddingX={8}>
                    {children}
                </Flex>

                {/* Footer */}
                <Flex as="footer" width="100%" padding={4} justifyContent="center" bg={bgLight} _dark={{ bg: bgDark }}>
                    <Text fontSize="sm">© {new Date().getFullYear()} Your Company. All rights reserved. | <Link href="/support" color="blue.500">Support</Link></Text>
                </Flex>
            </Flex>
        </ColorModeProvider>
    );
}
