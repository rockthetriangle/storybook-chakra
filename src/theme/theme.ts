// theme.ts
import { createSystem, defaultConfig } from "@chakra-ui/react";
import { breakpoints } from "./foundations/breakpoints";
import { buttonRecipe } from "./components/button";
import { badgeStyles } from "./components/badge";
import { linkStyles } from "./components/link";
import { inputStyles } from "./components/input";
import { CardComponent } from "./additions/card/Card";
import { MainPanelComponent } from "./additions/layout/MainPanel";
import { PanelContentComponent } from "./additions/layout/PanelContent";
import { PanelContainerComponent } from "./additions/layout/PanelContainer";

export const theme = createSystem(defaultConfig, {
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
          default: { value: "gray.50" },
          _dark: { value: "#1B254B" },
        },
        text: {
          default: { value: "gray.800" },
          _dark: { value: "gray.100" },
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
    components: {
      Button: buttonRecipe,
      Badge: badgeStyles,
      Link: linkStyles,
      Input: inputStyles,
      Card: CardComponent,
      MainPanel: MainPanelComponent,
      PanelContent: PanelContentComponent,
      PanelContainer: PanelContainerComponent,
    },
  },
});
