import React from 'react'
import {ReviewsFeedContainer} from "../../style/ReviewsFeed";
import {ReviewBox} from "../ReviewBox";


export const ReviewsFeed = ({reviews}) => {

    return (
        <>
           <ReviewsFeedContainer>
                {reviews.map(review => <ReviewBox key={review.id} review={review}/>)}
           </ReviewsFeedContainer>
        </>
    )
}
