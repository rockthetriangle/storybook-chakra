import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/theme/theme"; // Import your custom theme
import { ColorModeProvider } from "../src/components/ui/color-mode";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story) => (
      <ChakraProvider value={theme}> {/* Use your custom theme */}
        <Story />
      </ChakraProvider>
    ),
    withThemeByClassName({
      defaultTheme: "light",
      themes: { light: "", dark: "dark" },
    }),
  ],

  tags: ["autodocs"],
};

export default preview;
