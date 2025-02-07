import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
      	primary: {
      	  50: "#e3f2fd",
      	  100: "#bbdefb",
      	  200: "#90caf9",
      	  300: "#64b5f6",
      	  400: "#42a5f5",
      	  500: "#2196f3",
      	  600: "#1e88e5",
      	  700: "#1976d2",
      	  800: "#1565c0",
      	  900: "#0d47a1",
    	},
    	secondary: {
    	  50: "#f3e5f5",
      	  100: "#e1bee7",
      	  200: "#ce93d8",
      	  300: "#ba68c8",
      	  400: "#ab47bc",
      	  500: "#9c27b0",
      	  600: "#8e24aa",
      	  700: "#7b1fa2",
      	  800: "#6a1b9a",
      	  900: "#4a148c",
    	},
	  },
	  fonts: {
    	heading: "Arial, sans-serif",
    	body: "Arial, sans-serif",
  	  },
  	  styles: {
    	global: (props) => ({
      	  body: {
        	overflowX: "hidden",
        	bg: mode("gray.50", "#1B254B")(props),
        	fontFamily: "Helvetica, sans-serif",
    	  },
      	  html: {
        	fontFamily: "Helvetica, sans-serif",
      	  },
    	}),
  	  },
	},
  },
})