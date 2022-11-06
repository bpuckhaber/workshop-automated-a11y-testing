import React from "react";

import DropdownList from "components/dropdown-list";

import image from "../.storybook/assets/disneyland.jpg";

export default {
  title: "Components/DropdownList",
  component: DropdownList,
};

// We create a “template” of how args map to rendering
const Template = (args) => <DropdownList {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  defaultItemText: "All site types",
  items: ["Campgrounds", "State Parks", "Test Sites", "National Parks"],
};

export const Open = Template.bind({});

Open.args = {
  defaultItemText: "All site types",
  items: ["Campgrounds", "State Parks", "Test Sites", "National Parks"],
  initialActive: true,
};
