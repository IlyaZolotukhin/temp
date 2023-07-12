import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UnControlledAccordion/UncontrolledAccordion";


function App() {
    console.log('App rendering')
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    return (
        <div className={"App"}>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1 ControlledRating
            <Rating value={ratingValue} onClicK={setRatingValue}/>
            Article 2 UnControlledAccordion
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            Article 3 UnControlledRating
            <UnControlledRating/>
            {/*<Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            Article 4
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff onChange={setSwitchOn}/><div>{switchOn.toString()}</div>
            {/*<UncontrolledOnOff turnOn={true}/>*/}
            Article 5 ControlledAccordion
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
