import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: { value: "bold" },
    borderRadius: { value: "8px" },
    fontSize: { value: "10px" },
  },
  variants: {
    primary: {
      fontSize: { value: "10px" },
      bg: "{colors.primaryButtonBg}",
      color: "{colors.primaryButtonText}",
      _hover: { bg: "{colors.primaryButtonHover}" },
      _focus: { bg: "{colors.primaryButtonHover}" },
      _active: { bg: "{colors.primaryButtonHover}" },
    },
    navy: {
      fontSize: { value: "10px" },
      bg: "{colors.navyButtonBg}",
      color: "{colors.navyButtonText}",
      _hover: { bg: "{colors.navyButtonHover}" },
      _focus: { bg: "{colors.navyButtonHover}" },
      _active: { bg: "{colors.navyButtonHover}" },
    },
  },
});
