import { Button } from "@/components/atoms/Button";
import {
  toast,
  ToastContainer,
  Bounce,
  Slide,
  Zoom,
  Flip,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@chakra-ui/react";

const transitionMap = {
  Bounce,
  Slide,
  Zoom,
  Flip,
};

type TransitionType = keyof typeof transitionMap;

interface ToastDemoProps {
  message: string;
  position:
    | "top-right"
    | "top-left"
    | "top-center"
    | "bottom-right"
    | "bottom-left"
    | "bottom-center";
  type: "success" | "error" | "info" | "warning" | "default" | "custom";
  theme: "light" | "dark" | "colored";
  transition: TransitionType;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress?: number;
  customContent?: boolean;
}

// Custom Toast Message Component
const CustomToastMsg = ({ closeToast }: { closeToast: () => void }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    padding="10px"
    backgroundColor="#fff"
    borderRadius="8px"
    boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)"
    width="300px"
  >
    <span>Custom Toast Message</span>
    <Button onClick={closeToast} variant="solid">
      Close
    </Button>
  </Box>
);

// Toast demo component
const ToastDemo = ({
  message,
  position,
  type,
  theme,
  transition,
  autoClose,
  hideProgressBar,
  closeOnClick,
  pauseOnHover,
  draggable,
  progress,
  customContent,
}: ToastDemoProps) => {
  const showToast = () => {
    // Use the correct transition component based on the string value
    const transitionComponent = transitionMap[transition];

    if (type === "custom" || customContent) {
      toast((props) => <CustomToastMsg {...props} />, {
        position,
        autoClose,
        hideProgressBar,
        closeOnClick,
        pauseOnHover,
        draggable,
        progress,
        theme,
        closeButton: false,
        transition: transitionComponent,
      });
    } else {
      toast[type !== "default" ? type : "info"](message, {
        position,
        autoClose,
        hideProgressBar,
        closeOnClick,
        pauseOnHover,
        draggable,
        progress,
        theme,
        transition: transitionComponent,
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={showToast} variant="solid">
        Show Toast
      </Button>
      <ToastContainer />
    </div>
  );
};

// Storybook meta configuration
const meta = {
  title: "Atoms/Toast (React Toastify)",
  component: ToastDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    message: "This is a toast notification!",
    position: "top-right",
    type: "info",
    theme: "colored",
    transition: "Flip" as TransitionType,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    customContent: false,
  },
  argTypes: {
    message: {
      control: "text",
      description: "Toast message content",
    },
    position: {
      control: "radio",
      options: [
        "top-right",
        "top-left",
        "top-center",
        "bottom-right",
        "bottom-left",
        "bottom-center",
      ],
      description: "Toast position on screen",
    },
    type: {
      control: "radio",
      options: ["success", "error", "info", "warning", "default", "custom"],
      description: "Toast notification type",
    },
    theme: {
      control: "radio",
      options: ["light", "dark", "colored"],
      description: "Toast theme appearance",
    },
    transition: {
      control: "select",
      options: ["Bounce", "Slide", "Zoom", "Flip"],
      description: "Toast animation transition",
    },
    autoClose: {
      control: { type: "number", min: 1000, max: 10000, step: 1000 },
      description: "Auto close delay in milliseconds",
    },
    hideProgressBar: {
      control: "boolean",
      description: "Whether to hide the progress bar",
    },
    closeOnClick: {
      control: "boolean",
      description: "Close toast when clicked",
    },
    pauseOnHover: {
      control: "boolean",
      description: "Pause timer when hovering toast",
    },
    draggable: {
      control: "boolean",
      description: "Allow toast to be draggable",
    },
    progress: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description: "Custom progress value (0-1)",
    },
    customContent: {
      control: "boolean",
      description: "Use custom content component",
    },
  },
} satisfies Meta<typeof ToastDemo>;

export default meta;
type Story = StoryObj<typeof ToastDemo>;

// Position stories
export const PositionTopRight: Story = {
  name: "Position: Top Right",
  args: {
    position: "top-right",
  },
};

export const PositionTopLeft: Story = {
  name: "Position: Top Left",
  args: {
    position: "top-left",
  },
};

export const PositionTopCenter: Story = {
  name: "Position: Top Center",
  args: {
    position: "top-center",
  },
};

export const PositionBottomRight: Story = {
  name: "Position: Bottom Right",
  args: {
    position: "bottom-right",
  },
};

export const PositionBottomLeft: Story = {
  name: "Position: Bottom Left",
  args: {
    position: "bottom-left",
  },
};

export const PositionBottomCenter: Story = {
  name: "Position: Bottom Center",
  args: {
    position: "bottom-center",
  },
};

// Type stories
export const TypeInfo: Story = {
  name: "Type: Info",
  args: {
    type: "info",
  },
};

export const TypeSuccess: Story = {
  name: "Type: Success",
  args: {
    type: "success",
    message: "Operation completed successfully!",
  },
};

export const TypeWarning: Story = {
  name: "Type: Warning",
  args: {
    type: "warning",
    message: "Warning: This action cannot be undone!",
  },
};

export const TypeError: Story = {
  name: "Type: Error",
  args: {
    type: "error",
    message: "An error occurred. Please try again.",
  },
};

export const TypeDefault: Story = {
  name: "Type: Default",
  args: {
    type: "default",
    message: "Default toast notification",
  },
};

// Theme stories
export const ThemeLight: Story = {
  name: "Theme: Light",
  args: {
    theme: "light",
  },
};

export const ThemeDark: Story = {
  name: "Theme: Dark",
  args: {
    theme: "dark",
  },
};

export const ThemeColored: Story = {
  name: "Theme: Colored",
  args: {
    theme: "colored",
  },
};

// Transition stories
export const TransitionBounce: Story = {
  name: "Transition: Bounce",
  args: {
    transition: "Bounce",
  },
};

export const TransitionSlide: Story = {
  name: "Transition: Slide",
  args: {
    transition: "Slide",
  },
};

export const TransitionZoom: Story = {
  name: "Transition: Zoom",
  args: {
    transition: "Zoom",
  },
};

export const TransitionFlip: Story = {
  name: "Transition: Flip",
  args: {
    transition: "Flip",
  },
};

// Custom Toast story
export const CustomToast: Story = {
  name: "Custom: Interactive Toast",
  args: {
    type: "custom",
    theme: "light",
    customContent: true,
    hideProgressBar: true,
  },
};
