import { Box, For, Tabs } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "react-feather";
import {
    LuBell,
    LuFolder,
    LuSettings,
    LuSquareCheck,
    LuUser
} from "react-icons/lu";

const sizeOptions = ["sm", "md", "lg"] as const;
const variantOptions = ["line", "enclosed", "outline", "subtle", "plain"] as const;

const meta = {
  title: "Atoms/Tabs",
  component: Tabs.Root,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    defaultValue: "home",
    variant: "line",
    size: "md",
    colorPalette: "blue",
    fitted: false,
  },
  argTypes: {
    defaultValue: {
      control: "text",
      description: "The initial selected tab value",
    },
    variant: {
      control: "select",
      options: variantOptions,
      description: "Visual style of the tabs",
    },
    size: {
      control: "select",
      options: sizeOptions,
      description: "Size of the tabs",
    },
    colorPalette: {
      control: "select",
      options: ["gray", "red", "green", "blue", "teal", "pink", "purple", "cyan", "orange", "yellow"],
      description: "Color palette to use for the tabs",
    },
    fitted: {
      control: "boolean",
      description: "If true, tabs will stretch to width of the container",
    },
  },
} satisfies Meta<typeof Tabs.Root>;

export default meta;
type Story = StoryObj<typeof Tabs.Root>;

// Basic Tab example
export const Basic: Story = {
  render: (args) => (
    <Tabs.Root {...args} defaultValue={"home"}>
      <Tabs.List>
        <Tabs.Trigger value="home">
          <Home />
          Home
        </Tabs.Trigger>
        <Tabs.Trigger value="profile">
          <LuUser />
          Profile
        </Tabs.Trigger>
        <Tabs.Trigger value="settings">
          <LuSettings />
          Settings
        </Tabs.Trigger>
      </Tabs.List>
      <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
        <Tabs.Content value="home">Welcome to your dashboard! This is the home tab.</Tabs.Content>
        <Tabs.Content value="profile">This is your profile page where you can update your information.</Tabs.Content>
        <Tabs.Content value="settings">Adjust your application settings here.</Tabs.Content>
      </div>
    </Tabs.Root>
  ),
};

/**
 * Examples of different sizes
 */
export const Sizes: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <For each={sizeOptions}>
          {(size) => (
            <div key={size}>
              <span style={{ fontSize: "0.75rem", marginBottom: "0.5rem", display: "block" }}>
                {size}
              </span>
              <Tabs.Root {...args} size={size} defaultValue={"members"}>
                <Tabs.List>
                  <Tabs.Trigger value="members">
                    <LuUser />
                    Members
                  </Tabs.Trigger>
                  <Tabs.Trigger value="projects">
                    <LuFolder />
                    Projects
                  </Tabs.Trigger>
                  <Tabs.Trigger value="tasks">
                    <LuSquareCheck />
                    Tasks
                  </Tabs.Trigger>
                </Tabs.List>
                <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
                  <Tabs.Content value="members">Manage team members content</Tabs.Content>
                  <Tabs.Content value="projects">Manage projects content</Tabs.Content>
                  <Tabs.Content value="tasks">Manage tasks content</Tabs.Content>
                </div>
              </Tabs.Root>
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
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {variantOptions.map((variant) => (
          <div key={variant}>
            <span style={{ fontSize: "0.75rem", marginBottom: "0.5rem", display: "block" }}>
              {variant}
            </span>
            <Tabs.Root {...args} variant={variant} defaultValue={"members"}>
              <Tabs.List>
                <Tabs.Trigger value="members">
                  <LuUser />
                  Members
                </Tabs.Trigger>
                <Tabs.Trigger value="projects">
                  <LuFolder />
                  Projects
                </Tabs.Trigger>
                <Tabs.Trigger value="tasks">
                  <LuSquareCheck />
                  Tasks
                </Tabs.Trigger>
              </Tabs.List>
              <div style={{ padding: "1rem", marginTop: "0.5rem", minHeight: "80px" }}>
                <Tabs.Content value="members">Manage team members content</Tabs.Content>
                <Tabs.Content value="projects">Manage projects content</Tabs.Content>
                <Tabs.Content value="tasks">Manage tasks content</Tabs.Content>
              </div>
            </Tabs.Root>
          </div>
        ))}
      </div>
    );
  },
};


/**
 * Fitted tabs example
 */
export const Fitted: Story = {
  args: {
    fitted: true,
  },
  render: (args) => (
    <Box width={"500px"}>
    <Tabs.Root {...args}  defaultValue={"members"}>
      <Tabs.List>
        <Tabs.Trigger value="members">
          <LuUser />
          Members
        </Tabs.Trigger>
        <Tabs.Trigger value="projects">
          <LuFolder />
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks">
          <LuSquareCheck />
          Tasks
        </Tabs.Trigger>
      </Tabs.List>
      <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
        <Tabs.Content value="members">Manage team members content</Tabs.Content>
        <Tabs.Content value="projects">Manage projects content</Tabs.Content>
        <Tabs.Content value="tasks">Manage tasks content</Tabs.Content>
      </div>
    </Tabs.Root>
    </Box>
  ),
};

/**
 * Vertical tabs orientation
 */
export const Vertical: Story = {
  render: (args) => (
    <div style={{ display: "flex" }}>
      <Tabs.Root {...args} orientation="vertical" defaultValue={"account"}>
        <Tabs.List style={{ flexDirection: "column", marginRight: "1rem" }}>
          <Tabs.Trigger value="account">
            <LuUser />
            Account
          </Tabs.Trigger>
          <Tabs.Trigger value="security">
            <LuSquareCheck />
            Security
          </Tabs.Trigger>
          <Tabs.Trigger value="notifications">
            <LuBell />
            Notifications
          </Tabs.Trigger>
        </Tabs.List>
        <div style={{ padding: "1rem", flex: 1 }}>
          <Tabs.Content value="account">Manage your account settings and preferences.</Tabs.Content>
          <Tabs.Content value="security">Change your password and security settings.</Tabs.Content>
          <Tabs.Content value="notifications">Control how you receive notifications.</Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  ),
};