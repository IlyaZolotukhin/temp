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

/*const Template: Story<AccordionPropsType> = (args) => <Select {...args}/>
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}*/

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                                                  onClick={onClickCallback}/>
/*MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: []
}*/

export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}
                                                     items={[{title: "Dimych", value: 1}, {
                                                         title: "Valera",
                                                         value: 2
                                                     }, {title: "Artem", value: 3}, {title: "Ilya", value: 4}]}
                                                     onClick={onClickCallback}/>
/*
UsersUnCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
    items: [{title: 'Ilya', value: 1}, {title: 'IValera', value: 2}, {title: 'Victor', value: 3}, {title: 'Artem', value: 4}]
*/

/*

export const MenuCollapsedMode = () => <Select titleValue={"Menu"} collapsed={true} onChange={callback}/>;
export const UsersUnCollapsedMode = () => <Select titleValue={"Users"} collapsed={false} onChange={callback}/>;
*/

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}
                      items={[{title: "Dimych", value: 1},
                          {title: "Valera", value: 2},
                          {title: "Artem", value: 3},
                          {title: "Ilya", value: 4}
                      ]}
                      onClick={(id) => {
                          alert(`user with ID ${value} should be happy`)
                      }}
    />;


}


