import React from "react";

import Button from "./Button";



export default {
    title: "Buttons/Button",
    component: Button,
    parameters: {
        docs: {
            description: {
                component: "Bu bir buton componentidir."
            }
        }
    }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
    label: "Primary Button",
    onClick: undefined,
    textColor: "white",
    isLightMode: false
}


export const Secondary = Template.bind({});
Secondary.args = {
    label: "Secondary Button",
    onClick: undefined,
    textColor: "white",
    isLightMode: false
}

export const Disabled = Template.bind({});
Disabled.args = {
    label: "Disabled Button",
    onClick: undefined,
    textColor: "white",
    isLightMode: false
}