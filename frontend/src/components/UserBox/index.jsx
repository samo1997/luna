import React from 'react'
import {
    BottomContainerUserbox,
    LatestReviewContainer,
    Name,
    Overline,
    ProfileHeaderContainer,
    ProfileNameContainer,
    ProfilePicture,
    ProfilePictureContainer,
    ReadMoreLink,
    RestaurantName,
    ReviewTextContainer,
    ReviewTextContent,
    TopContainer,
    TotalReviews,
    UserBoxContainer
} from "../../style/ReviewBox";
import ProfilePictureDefault from '../../assets/images/profile_default.png'


export const UserBox = ({review}) => {

    const reviewRender = (review) => {
        if (review.restaurant === undefined) {
            return "6 Reviews in Total"
        }
        if (review.restaurant.reviews_counter > 1) {
            return review.restaurant.reviews_counter + " Reviews in Total";
        } else if (review.restaurant.reviews_counter === 1) {
            return review.restaurant.reviews_counter + " Review in Total";
        }
    }

    return (
        <>
            <UserBoxContainer>

                <TopContainer>
                    <Overline></Overline>
                    <ProfileHeaderContainer>
                        <ProfilePictureContainer>
                            <ProfilePicture src={review.author ? review.author.profile_picture : ProfilePictureDefault} />
                        </ProfilePictureContainer>
                        <ProfileNameContainer>
                            <Name>{review.author ? review.author.first_name + ' ' + review.author.last_name[0] + '.' : "Laurent H."}</Name>
                            <TotalReviews>{reviewRender(review)}</TotalReviews>
                        </ProfileNameContainer>
                    </ProfileHeaderContainer>
                </TopContainer>

                <BottomContainerUserbox>

                    <LatestReviewContainer>
                        <RestaurantName>{review.restaurant ? review.restaurant.name : "Colinz Bar"}</RestaurantName>
                        <ReviewTextContainer>
                            <ReviewTextContent>{review.text_content ? review.text_content : "Don't waste your time. Pizza dough good, thin crust but ingredients so so. Side of mixed vegetables very oily and mainly bell..."}</ReviewTextContent>
                            <ReadMoreLink to={'/restaurants/23'}>read more</ReadMoreLink>
                        </ReviewTextContainer>
                    </LatestReviewContainer>

                </BottomContainerUserbox>

            </UserBoxContainer>
        </>
    )
}
