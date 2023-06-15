import React, {useState} from "react";

/*type OnOffPropsType = {
    turnOn: boolean
}*/

export function OnOff(/*props: OnOffPropsType*/) {
   /* if (props.turnOn === true) {
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
    } ИЛИ */

    let[on, setOn] = useState(false);

    const onStyle = {
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft:"2px",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft:"2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "20px",
        height:"20px",
        borderRadius: "5px",
        display: "inline-block",
        marginLeft:"5px",
        padding: "2px",
        backgroundColor: on ? "green" : "red"
    }

    return <div>
        <div style={onStyle} onClick={()=>{setOn(true)}}>ON</div>
        <div style={offStyle} onClick={()=>{setOn(false)}}>OFF</div>
        <div style={indicatorStyle}>X</div>
    </div>
}
