import React, {useState} from "react";
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
};

export const EmptyRating  = () => <Rating value={0} onClicK={x=>x} />;
export const Rating1  = () => <Rating value={1} onClicK={x=>x} />;
export const Rating2  = () => <Rating value={2} onClicK={x=>x} />;
export const Rating3  = () => <Rating value={3} onClicK={x=>x} />;
export const Rating4  = () => <Rating value={4} onClicK={x=>x} />;

export const RatingChanging  = () => {
    const [rating, setRating] = useState<RatingValueType>(2);
    return <Rating value={rating} onClicK={setRating} />;
}
