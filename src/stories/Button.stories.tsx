import { Button } from "@/components/Chakra/button";
import { For, useRecipe } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri";


const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "solid",
    size: "md",
    loading: false,
    disabled: false, 
  },
  argTypes: {
    children: {
      control: "text",
      description: "Button label content",
    },
    variant: {
      control: "select",
      options: ["outline", "solid", "subtle", "surface", "ghost", "plain"],
      description: "Button variant style",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
      description: "Button size",
    },
    loading: {
      control: "boolean",
      description: "Show loading spinner",
    },
    disabled: {
      control: "boolean",
      description: "Disable button",
    },
    leftIcon: {
      control: false,
      description: "Icon component to render on the left",
    },
    rightIcon: {
      control: false,
      description: "Icon component to render on the right",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: "Basic Button",
  },
};
/**
 * Examples of different sizes
 */
export const Sizes: Story = {
  render: (args) => {
    const recipe = useRecipe({ key: "button" });
    return (
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <For each={recipe.variantMap.size}>
          {(size) => (
            <div
              key={size}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button {...args} size={size} />
              <span style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>
                {size}
              </span>
            </div>
          )}
        </For>
      </div>
    );
  },
};

/**
 * Examples of different variants
 */
export const Variants: Story = {
  render: (args) => {
    const recipe = useRecipe({ key: "button" });
    return (
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <For each={recipe.variantMap.variant}>
          {(variant) => (
            <div
              key={variant}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button {...args} variant={variant} />
              <span style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>
                {variant}
              </span>
            </div>
          )}
        </For>
      </div>
    );
  },
};

/**
 * Loading state example
 */
export const Loading: Story = {
  args: {
    children: "Loading",
    loading: true,
    variant: "solid",
  },
};

/**
 * Disabled state example
 */
export const Disabled: Story = {
  args: {
    children: "Disabled",
    loading: true,
    variant: "solid",
  },
};

/**
 * Button with left icon
 */
export const WithLeftIcon: Story = {
  args: {
    children: "Email",
    leftIcon: RiMailLine,
    variant: "solid",
  },
};

/**
 * Button with right icon
 */
export const WithRightIcon: Story = {
  args: {
    children: "Next",
    rightIcon: RiArrowRightLine,
    variant: "outline",
  },
};
