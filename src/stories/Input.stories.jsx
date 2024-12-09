import React from "react";

import Input from "./Input";

export default {
    title: "Inputs/Input",
    component: Input
}

const Template = (args) => <Input {...args} />
export const Primary = Template.bind({});
Primary.args = {
    placeholder: "Placeholder",
    type: "text",
    onChange: undefined,
    border: '3px solid black'
}


export const Secondary = Template.bind({});
Secondary.args = {
    placeholder: "Placeholder",
    type: "text",
    onChange: undefined,
    border: '3px solid green'
}


export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: "Placeholder",
    type: "text",
    onChange: undefined,
    border: '3px solid gray'
}