// Color.stories.tsx
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { theme } from "../theme/theme";
import { Meta } from "@storybook/react";

export default {
  title: "Design System/Colors",
} as Meta;

export const Colors = () => {
  if (!theme || !theme.token) {
    return <Text color="red.500">Error: Theme not loaded properly</Text>;
  }

  const colorCategories = ["red", "gray", "indigo", "aqua", "blue", "flame", "green"];

  return (
    <Box p={8} bg={theme.token("colors.background")}>
      {colorCategories.map((colorName) => {
        // Retrieve color shades using theme.token()
        const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

        return (
          <Box key={colorName} mb={8}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
            </Text>
            <SimpleGrid columns={{ base: 2, md: 5 }} spacing={4}>
              {shades.map((shade) => {
                const color = theme.token(`colors.${colorName}.${shade}`, "#000"); // Fallback to black if undefined

                return (
                  <Box
                    key={shade}
                    bg={color}
                    color={shade >= 500 ? "white" : "black"}
                    p={4}
                    borderRadius="md"
                    textAlign="center"
                  >
                    <Text fontSize="sm" fontWeight="bold">
                      {shade}
                    </Text>
                    <Text fontSize="xs">{color}</Text>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>
        );
      })}
    </Box>
  );
};
