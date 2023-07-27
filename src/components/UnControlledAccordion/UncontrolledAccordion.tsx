import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Select rendering')

    //let [collapsed,setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    const onclickToggle = () => {
        /* setCollapsed(!collapsed)*/
        dispatch({type: TOGGLE_COLLAPSED})
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={onclickToggle}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

type  AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>--{props.title}--</h3>
    );
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}


