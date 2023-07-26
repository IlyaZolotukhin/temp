import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {Select} from "./Select";

export default {
    title: ' Select',
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState('2');

    return <>
        <Select onChange={setValue}
                value={value}
                items={
                    [
                        {value: '1', title: 'Novosibirsk'},
                        {value: '2', title: 'Vladivostok'},
                        {value: '3', title: 'Sochi'},
                    ]
                }/>
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);

    return <>
        <Select onChange={setValue}
                value={value}
                items={
                    [
                        {value: '1', title: 'Novosibirsk'},
                        {value: '2', title: 'Vladivostok'},
                        {value: '3', title: 'Sochi'},
                    ]
                }/>
    </>
}
