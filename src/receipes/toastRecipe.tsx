import { defineRecipe } from "@chakra-ui/react";

export const toastRecipe = defineRecipe({
  base: {
    "&[data-type=info]": {
      bg: "blue.500",
      color: "white",
      "--toast-trigger-bg": "{white/10}",
      "--toast-border-color": "{white/40}",
    },
    "&[data-type=warning]": {
      bg: "orange.600",
      color: "white",
      "--toast-trigger-bg": "{white/10}",
      "--toast-border-color": "{white/40}",
    },
    "&[data-type=success]": {
      bg: "green.500",
      color: "white",
      "--toast-trigger-bg": "{white/10}",
      "--toast-border-color": "{white/40}",
    },
    "&[data-type=error]": {
      bg: "red.600",
      color: "white",
      "--toast-trigger-bg": "{white/10}",
      "--toast-border-color": "{white/40}",
    },
  },
});
