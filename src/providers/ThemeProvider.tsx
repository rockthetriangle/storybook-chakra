"use client";

import {
  ChakraProvider,
  defaultConfig,
  defineConfig,
  createSystem,
  defineAnimationStyles,
} from "@chakra-ui/react";

import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "@/components/molecules/color-mode";

import { breakpoints } from "@/theme/foundations/breakpoints";
import { toastRecipe } from "@/receipes/toastRecipe";

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
          100: { value: "#84a0dc" },
          200: { value: "#728bcf" },
          300: { value: "#5b73bb" },
          400: { value: "#4156a1" },
          500: { value: "#344891" },
          600: { value: "#24347b" },
          700: { value: "#192668" },
        },
        aqua: {
          100: { value: "#91f2cb" },
          200: { value: "#57dab1" },
          300: { value: "#2db597" },
          400: { value: "#008473" },
          500: { value: "#00716d" },
          600: { value: "#005b5f" },
          700: { value: "#00444c" },
        },
        green: {
          100: { value: "#bfcc46" },
          200: { value: "#a2b729" },
          300: { value: "#8d9e2b" },
          400: { value: "#6f7d1c" },
          500: { value: "#586800" },
          600: { value: "#424c09" },
          700: { value: "#2f3a03" },
        },
        gray: {
          50: { value: "#f5f5f5" },
          100: { value: "#f1f1f1" },
          200: { value: "#cccccc" },
          300: { value: "#b2b2b2" },
          400: { value: "#9a9a9a" },
          500: { value: "#818181" },
          600: { value: "#666666" },
          700: { value: "#4d4d4d" },
          800: { value: "#333333" },
          900: { value: "#1a1a1a" },
        },
        blue: {
          100: { value: "#80c3d4" },
          200: { value: "#a9d1dc" },
          300: { value: "#599baf" },
          400: { value: "#427e93" },
          500: { value: "#2d637a" },
          600: { value: "#1d4b61" },
          700: { value: "#12394d" },
          800: { value: "#002438" },
          900: { value: "#00162a" },
        },
        flame: {
          100: { value: "#f8a812" },
          200: { value: "#f28c0d" },
          300: { value: "#e16408" },
          400: { value: "#d14905" },
          500: { value: "#c03003" },
          600: { value: "#a91b02" },
          700: { value: "#910e01" },
        },
        red: {
          100: { value: "#ea1500" },
          200: { value: "#cc0000" },
          300: { value: "#b40000" },
          400: { value: "#990000" },
          500: { value: "#7e0000" },
          600: { value: "#5e0000" },
          700: { value: "#3e0000" },
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
          base: { value: "#F1F1F1" },
          _dark: { value: "#1E4B62" },
        },
        text: {
          base: { value: "{colors.gray.800}" },
          _dark: { value: "{colors.gray.100}" },
        },
        primary: {
          base: { value: "{colors.red.200}" },
          _dark: { value: "#002539" },
        },
        secondary: {
          base: { value: "{colors.aqua.500}" },
          _dark: { value: "{colors.aqua.200}" },
        },
      },
    },
    breakpoints,
    animationStyles,
    recipes: {
      toast: toastRecipe,
    },
  },
  globalCss: {
    html: {
      overflowX: "hidden",
      backgroundColor: "{colors.background}",
      color: "{colors.text}",
      fontFamily: "Helvetica, sans-serif",
    },
    body: {
      overflowX: "hidden",
      backgroundColor: "{colors.background}",
      color: "{colors.text}",
      fontFamily: "Helvetica, sans-serif",
    },
  },
});

const theme = createSystem(defaultConfig, _config);

export default function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}

export { theme }; // Export Theme
