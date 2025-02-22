import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { theme } from "@/providers/ThemeProvider"; // Import theme for accessing colors
import { Meta } from "@storybook/react";

export default {
  title: "Design System/Colors",
} as Meta;

export const Colors = () => {
  if (!theme || !theme.token) {
    return <Text color="red.500">Error: Theme not loaded properly</Text>;
  }

  const colorPalettes = ["red", "gray", "indigo", "aqua", "blue", "flame", "green"];
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <Box p={8} bg={theme.token("colors.background")}>
      {colorPalettes.map((colorPalette) => (
        <Box key={colorPalette} mb={8}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            {colorPalette.charAt(0).toUpperCase() + colorPalette.slice(1)}
          </Text>
          <SimpleGrid columns={{ base: 2, md: 5 }} spacing={4}>
            {shades.map((shade) => {
              // Resolve the actual HEX value from Chakra's theme tokens
              const colorToken = `colors.${colorPalette}.${shade}`;
              const color = theme.token(colorToken, "#FFF"); // Fallback to black if undefined

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
                  <Text fontSize="xs">{color}</Text> {/* Show actual HEX */}
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};
