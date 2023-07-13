import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from '@storybook/addon-actions';
import {Story} from "@storybook/react";

export default {
    title: ' components/Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: []
}

export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
    items: [{title: 'Ilya', value: 1}, {title: 'IValera', value: 2}, {title: 'Victor', value: 3}, {title: 'Artem', value: 4}]
}
/*

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback}/>;
export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}/>;
*/

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}
                      items = {[
                          {title: 'Ilya', value: 1},
                          {title: 'IValera', value: 2},
                          {title: 'Victor', value: 3},
                          {title: 'Artem', value: 4}
                      ]}
                      onClick={(value) => {
                      alert(`user with ID ${value} should be happy`)
                      }}
    />;
}


