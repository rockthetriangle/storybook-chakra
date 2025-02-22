import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "bold",
    borderRadius: "8px",
    padding: "8px 16px",
  },
  variants: {
    solid: (props) => {
      const { colorPalette } = props;
      return {
        bg: props.theme.token(`colors.${colorPalette}.500`, "gray.500"),
        color: "white",
        _hover: {
          bg: props.theme.token(`colors.${colorPalette}.600`, "gray.600"),
        },
      };
    },
    outline: (props) => {
      const { colorPalette } = props;
      return {
        border: "2px solid",
        borderColor: props.theme.token(`colors.${colorPalette}.500`, "gray.500"),
        color: props.theme.token(`colors.${colorPalette}.500`, "gray.500"),
        _hover: {
          bg: props.theme.token(`colors.${colorPalette}.100`, "gray.100"),
        },
      };
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});
