import { Button, Stack, Text } from "@chakra-ui/react";

export default {
  title: "Atoms/Button",
};

const colorPalettes = ["indigo", "blue", "green", "flame", "red", "aqua"];

export const Buttons = () => (
  <Stack gap="2">
    {colorPalettes.map((colorPalette) => (
      <Stack key={colorPalette} direction="row" align="center" gap="10">
        <Text>{colorPalette}</Text>
        <Button colorPalette={colorPalette} onClick={() => console.log(colorPalette)}>Solid</Button>
        <Button colorPalette={colorPalette} variant="outline">Outline</Button>
        <Button colorPalette={colorPalette} variant="subtle">Subtle</Button>
      </Stack>
    ))}
  </Stack>
);