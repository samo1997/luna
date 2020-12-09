import React from 'react'
import {
    Address, BottomContainer,
    InfoContainer, AmountReviews,
    Overline, RatingContainer,
    RestaurantBoxContainer,
    RestaurantName, RestaurantPicture,
    TopContainer
} from "../../style/RestaurantBox";
import {Stars} from "../Stars";
import restaurantDefault from '../../assets/images/restaurant_cafe.jpg'


export const RestaurantBox = ({restaurant}) => {

    return (
        <>
            <RestaurantBoxContainer>

                <TopContainer>
                    <Overline></Overline>
                    <InfoContainer>
                        <RestaurantName>{restaurant.name ? restaurant.name : "Default Name"}</RestaurantName>
                        <Address>{restaurant.city ? restaurant.city : "Default Address"}</Address>
                        <RatingContainer>
                            <Stars rating={restaurant.rating} />
                            <AmountReviews>{restaurant.review_counter ? restaurant.review_counter : "18"}</AmountReviews>
                        </RatingContainer>
                    </InfoContainer>
                </TopContainer>

                <BottomContainer>
                    <RestaurantPicture src={restaurant.image ? restaurant.image : restaurantDefault}/>
                </BottomContainer>

            </RestaurantBoxContainer>
        </>
    )
}
