import type { Preview } from "@storybook/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

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
      <ChakraProvider value={defaultSystem}>
        <Story />
      </ChakraProvider>
    ),
  ],
  
  tags: ["autodocs"]
};

export default preview;