import { Meta, Story } from "@storybook/react";
import Icon from "../components/atoms/Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    name: { 
      control: "select",
      options: [
    	"search", 
    	"checkmark", 
    	"delete"
      ]
    },
    size: { control: "text" },
    color: { control: "color" },
  },
} as Meta<typeof Icon>;

const Template: Story = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "search",
  size: "32px",
  color: "black",
};
