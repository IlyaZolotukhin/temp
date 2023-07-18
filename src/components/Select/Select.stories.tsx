import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {Select} from "./Select";

export default {
    title: ' components/Select',
    component: Select,
};

const callback = action("accordion mode change event fired");

export const UsersUnCollapsedMode = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Select value={"Users"} collapsed={value} onChange ={()=>setValue(!value)}
            items={[{title: "Dimych", value: 1},
                {title: "Valera", value: 2},
                {title: "Artem", value: 3},
                {title: "Ilya", value: 4}]}
    />
}