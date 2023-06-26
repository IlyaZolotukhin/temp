import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClicK: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('UnControlledRating rendering')

    return (
        <div>
            <Star selected={props.value > 0} onClicK={props.onClicK} value={1}/>
            <Star selected={props.value > 1} onClicK={props.onClicK} value={2}/>
            <Star selected={props.value > 2} onClicK={props.onClicK} value={3}/>
            <Star selected={props.value > 3} onClicK={props.onClicK} value={4}/>
            <Star selected={props.value > 4} onClicK={props.onClicK} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClicK: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    return <span onClick={()=>{props.onClicK(props.value)}}>
        {props.selected === true ? <b>star </b> : " star"}
    </span>

}