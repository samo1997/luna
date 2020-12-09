import React from 'react'
import {RestaurantsFeedContainer} from "../../style/RestaurantsFeed";
import {RestaurantBox} from "../RestaurantBox";


export const RestaurantsFeed = ({restaurants}) => {

    return (
        <>
           <RestaurantsFeedContainer>
                {restaurants.map(restaurant => <RestaurantBox key={restaurant.id} restaurant={restaurant}/>)}
           </RestaurantsFeedContainer>
        </>
    )
}
