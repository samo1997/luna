import React from 'react'
import {EmptyStarWrapper, FullStarWrapper, StarContainer} from "../../style/Stars";
import { ReactComponent as FullStarIcon } from '../../assets/svgs/star_full.svg';
import { ReactComponent as EmptyStarIcon } from '../../assets/svgs/star_empty.svg';

export const Stars = ({rating}) => {

    return (
        <>
            <StarContainer>
                {}
                <FullStarWrapper><FullStarIcon></FullStarIcon></FullStarWrapper>
                <FullStarWrapper><FullStarIcon></FullStarIcon></FullStarWrapper>
                <FullStarWrapper><FullStarIcon></FullStarIcon></FullStarWrapper>
                <FullStarWrapper><FullStarIcon></FullStarIcon></FullStarWrapper>
                {/*<HalfStar></HalfStar>*/}
                <EmptyStarWrapper><EmptyStarIcon></EmptyStarIcon></EmptyStarWrapper>
            </StarContainer>
        </>
    )
}
