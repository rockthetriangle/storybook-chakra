import { For, Input, useRecipe } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";


const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "Enter text...",
    value: "",
    variant: "outline",
    size: "md",
    disabled: false,
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    value: {
      control: "text",
      description: "Input value",
    },
    variant: {
      control: "select",
      options: ["outline", "flushed", "subtle"],
      description: "Input variant style",
    },
    size: {
      control: "select",
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Input size",
    },
    disabled: {
      control: "boolean",
      description: "Disable the input",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * Basic Input example
 */
export const Basic: Story = {
  args: {
    placeholder: "Enter your name",
  },
};

/**
 * Examples of different sizes
 */
export const Sizes: Story = {
  render: (args) => {
    const recipe = useRecipe({ key: "input" });
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
              <Input {...args} size={size} />
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
    const recipe = useRecipe({ key: "input" });
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
              <Input {...args} variant={variant} />
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
 * Disabled state example
 */
export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

