import { SearchGuideCard } from "@/components/molecules/SearchGuideCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/SearchGuideCard",
  component: SearchGuideCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconSrc: {
      control: "text",
      description: "Path to the icon image",
      defaultValue: "/icons/search-people-group.png",
    },
    title: {
      control: "text",
      description: "Title displayed on the card",
      defaultValue: "Search People",
    },
    description: {
      control: "text",
      description: "Description displayed below the title",
      defaultValue: "Look up someone using their CampusID or full name.",
    },
  },
} satisfies Meta<typeof SearchGuideCard>;

export default meta;

type Story = StoryObj<typeof SearchGuideCard>;

export const SearchPeople: Story = {
  args: {
    iconSrc: "/icons/search-people-group.png",
    title: "Search People",
    description: "Look up someone using their CampusID or full name.",
  },
};

export const RecentSearches: Story = {
  args: {
    iconSrc: "/icons/search-bars-group.png",
    title: "Recent Searches",
    description: "Quickly access your 5 most recent searches.",
  },
};
