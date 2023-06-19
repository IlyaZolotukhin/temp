import React from 'react';
import './App.css';
//import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";


function App() {
    console.log('App rendering')
    return (
        <div className={"App"}>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <UnControlledAccordion titleValue={"Menu"} />
            <UnControlledAccordion titleValue={"Users"} />
            Article 2
            <UnControlledRating />
            {/*<Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            Article 2
            <OnOff />
            {/*<OnOff turnOn={true}/>*/}
        </div>
    );
}

type PageTitlePropsType ={
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
