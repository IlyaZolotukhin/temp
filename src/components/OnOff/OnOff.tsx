import React from "react";

type OnOffPropsType = {
    turnOn: boolean
}

export function OnOff(props: OnOffPropsType) {
    if (props.turnOn === true) {
        return <div>
            <span style={{margin:"20px", border: "3px solid black", backgroundColor:"green"}}>ON </span>
            <span style={{margin:"20px", border: "3px solid black"}}>OFF</span>
            <span style={{margin:"20px", border: "3px solid black", borderRadius: "20px", backgroundColor:"green", padding:"5px"}}>X</span>
        </div>
    } else {
        return <div>
            <span style={{margin:"20px", border: "3px solid black"}}>ON </span>
            <span style={{margin:"20px", border: "3px solid black", backgroundColor:"red"}}>OFF</span>
            <span style={{margin:"20px", border: "3px solid black", borderRadius: "20px", backgroundColor:"red", padding:"5px"}}>X</span>
        </div>
    }
}
