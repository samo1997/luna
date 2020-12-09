import React from 'react'
import {UsersFeedContainer} from "../../style/UsersFeed";
import {UserBox} from "../UserBox";


export const UsersFeed = ({reviews}) => {

    return (
        <>
           <UsersFeedContainer>
                {reviews.map(review => <UserBox key={review.id} review={review}/>)}
           </UsersFeedContainer>
        </>
    )
}
