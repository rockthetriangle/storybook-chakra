export const CardComponent = {
  tokens: {
    components: {
      Card: {
        baseStyle: {
          p: { value: "22px" },
          display: { value: "flex" },
          flexDirection: { value: "column" },
          width: { value: "100%" },
          boxShadow: { value: "0px 5px 14px rgba(0, 0, 0, 0.05)" },
          borderRadius: { value: "20px" },
          position: { value: "relative" },
          wordWrap: { value: "break-word" },
          backgroundClip: { value: "border-box" },
        },

        variants: {
          panel: {
            bg: "{colors.cardBg}",
          },
        },

        defaultProps: {
          variant: { value: "panel" }, 
        },
      },
    },

    semanticTokens: {
      colors: {
        cardBg: {
          default: { value: "white" },
          _dark: { value: "#111C44" },
        },
      },
    },
  },
};
