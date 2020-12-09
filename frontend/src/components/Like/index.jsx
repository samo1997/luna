import React, { useState } from 'react'
import {LikeContainer, LikeCounter, LikeTitle} from "../../style/ReviewBox";
import {useDispatch} from 'react-redux';
import { ReactComponent as LikeIcon } from '../../assets/svgs/like.svg';

export const Like = ({review}) => {
    const dispatch = useDispatch();
    const [ID] = useState(review.id)

    const likeHandler = () => {
        // WIP
    }

    return (<>
        <LikeContainer onClick={() => likeHandler()}>
            <LikeIcon />
            <LikeTitle>Like</LikeTitle>
            <LikeCounter>{review.likes_counter ? review.likes_counter : "63"}</LikeCounter>
        </LikeContainer>
    </>)
}





