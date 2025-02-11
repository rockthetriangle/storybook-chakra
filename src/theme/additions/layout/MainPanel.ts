export const MainPanelComponent = {
  tokens: {
    components: {
      MainPanel: {
        baseStyle: {
          float: { value: "right" },
          maxWidth: { value: "100%" },
          overflow: { value: "auto" },
          position: { value: "relative" },
          maxHeight: { value: "100%" },
          transition: { value: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)" },
          transitionDuration: { value: ".2s, .2s, .35s" },
          transitionProperty: { value: "top, bottom, width" },
          transitionTimingFunction: { value: "linear, linear, ease" },
        },

        variants: {
          main: {
            float: { value: "right" },
          },
          rtl: {
            float: { value: "left" },
          },
        },

        defaultProps: {
          variant: { value: "main" },
        },
      },
    },
  },
};
