import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /*
    * Elements that are showed when accordion is opened (not collapsed)
    * */
    items: ItemType[]
    /*
    * CallBack that is called when any item will clicked
    * @param value is value of clicked item
    * */
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
              return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
                {!props.collapsed && <AccordionBody/>}
                {/*в пропсах меню приходит true !-меняет на false и далее через && не идет отрисовывать
                в пропсах Users приходит false !-меняет на true и далее через && идет отрисовывать*/}
            </div>
        );

}

type  AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={(e) => props.onChange()}>***{props.title}***</h3>
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

