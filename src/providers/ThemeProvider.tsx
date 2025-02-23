"use client"

import { ChakraProvider, defaultConfig, defineConfig, createSystem, defineAnimationStyles } from "@chakra-ui/react"

import { ColorModeProvider, type ColorModeProviderProps } from "@/components/Chakra/color-mode"

import { breakpoints } from "@/theme/foundations/breakpoints";
import { buttonRecipe } from "@/theme/components/button";
import { badgeStyles } from "@/theme/components/badge";
import { linkStyles } from "@/theme/components/link";
import { inputStyles } from "@/theme/components/input";
import { CardComponent } from "@/theme/additions/card/Card";
import { SidePanelComponent } from '@/theme/additions/layout/SidePanel';
import { MainPanelComponent } from "@/theme/additions/layout/MainPanel";
import { PanelContentComponent } from "@/theme/additions/layout/PanelContent";
import { PanelContainerComponent } from "@/theme/additions/layout/PanelContainer";


// Define the slide-in animation
export const animationStyles = defineAnimationStyles({
  slideIn: {
    value: {
      animationName: "slide-from-left-full",
      animationDuration: "0.7s",
      animationTimingFunction: "ease-in-out",
    },
  },
  slideOut: {
    value: {
      animationName: "slide-to-left-full", // Chakra UI's default exit keyframe
      animationDuration: "0.7s",
      animationTimingFunction: "ease-in-out",
    },
  },
});

const _config = defineConfig({
  theme: {
    tokens: {
      colors: {
        indigo: {
          100: "#84a0dc",
          200: "#728bcf",
          300: "#5b73bb",
          400: "#4156a1",
          500: "#344891",
          600: "#24347b",
          700: "#192668",
        },
        aqua: {
         	100: "#91f2cb",
          200: "#57dab1",
          300: "#2db597",
          400: "#008473",
          500: "#00716d",
          600: "#005b5f",
          700: "#00444c",
        },
        green: {
          100: "#bfcc46",
          200: "#a2b729",
          300: "#8d9e2b",
          400: "#6f7d1c",
          500: "#586800",
          600: "#424c09",
          700: "#2f3a03",
        },
        gray: {
          50: "#f5f5f5",
          100: "#f1f1f1",
          200: "#cccccc",
          300: "#b2b2b2",
          400: "#9a9a9a",
          500: "#818181",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
        },
        blue: {
          100: "#80c3d4",
          200: "#a9d1dc",
          300: "#599baf",
          400: "#427e93",
          500: "#2d637a",
          600: "#1d4b61",
          700: "#12394d",
          800: "#002438",
          900: "#00162a",
        },
        flame: {
          100: "#f8a812",
          200: "#f28c0d",
          300: "#e16408",
          400: "#d14905",
          500: "#c03003",
          600: "#a91b02",
          700: "#910e01",
        },
        red: {
          100: "#ea1500",
          200: "#cc0000",
          300: "#b40000",
          400: "#990000",
          500: "#7e0000",
          600: "#5e0000",
          700: "#3e0000",
        },
      },
      fonts: {
        heading: { value: "'Figtree', sans-serif" },
        body: { value: "'Figtree', sans-serif" },
      },
    },

    semanticTokens: {
      colors: {
        background: {
          default: { value: "#F1F1F1" },
          _dark: { value: "#1E4B62" },
        },
        text: {
          default: { value: "{colors.gray.800}" },
          _dark: { value: "{colors.gray.100}" },
        },
        primary: {
          default: { value: "{colors.red.200}" },
          _dark: { value: "#002539" },
        },
        secondary: {
          default: { value: "{colors.aqua.500}" },
          _dark: { value: "{colors.aqua.200}" },
        },
      },
    },
    styles: {
      global: {
        "html, body": {
          overflowX: "hidden",
          backgroundColor: "{colors.background}",
          color: "{colors.text}",
          fontFamily: "Helvetica, sans-serif",
        },
      },
    },
  	breakpoints,
  	extend: {
  		components: {
      	Button: buttonRecipe,
      	Badge: badgeStyles,
      	Link: linkStyles,
      	Input: inputStyles,
      	Card: CardComponent,
      	SidePanel: SidePanelComponent,
      	MainPanel: MainPanelComponent,
      	PanelContent: PanelContentComponent,
      	PanelContainer: PanelContainerComponent,
    	},
    	animationStyles,
  	},
  },
});
  
const theme = createSystem(defaultConfig, _config); // Create Theme System
console.log("🚀 Theme being initiated: ", theme);
export default function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}

export { theme }; // Export Theme
