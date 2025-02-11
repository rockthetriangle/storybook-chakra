export const inputStyles = {
  tokens: {
    components: {
      Input: {
        baseStyle: {
          field: {
            fontWeight: { value: 400 },
          },
        },

        variants: {
          auth: {
            field: {
              bg: "{colors.inputBg}",
              border: { value: "1px solid" },
              borderColor: "{colors.inputBorder}",
              _placeholder: { color: "{colors.inputPlaceholder}" },
            },
          },
        },
      },
    },

    semanticTokens: {
      colors: {
        inputBg: {
          default: { value: "white" },
          _dark: { value: "navy.700" },
        },
      },
    },
  },
};
