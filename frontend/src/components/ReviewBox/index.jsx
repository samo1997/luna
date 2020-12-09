import React from 'react'
import {
    BottomContainer,
    CommentContainer,
    CommentCounter,
    CommentTitle, LatestCommentsContainer, LatestCommentTitle,
    LatestReviewContainer,
    MostRecentCommentator, MostRecentCommentContainer, MostRecentCommentContent,
    Name,
    Overline,
    ProfileHeaderContainer,
    ProfileNameContainer,
    ProfilePicture,
    ProfilePictureContainer,
    ReadMoreLink,
    RestaurantName,
    ReviewBoxContainer, ReviewTextContainer, ReviewTextContent,
    ScndMostRecentCommentator, ScndMostRecentCommentContainer, ScndMostRecentCommentContent,
    SocialContainer,
    TopContainer,
    TotalReviews
} from "../../style/ReviewBox";
import ProfilePictureDefault from '../../assets/images/profile_default.png'
import {Like} from "../Like";


export const ReviewBox = ({review}) => {

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
            <ReviewBoxContainer>

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

                <BottomContainer>

                    <LatestReviewContainer>
                        <RestaurantName>{review.restaurant ? review.restaurant.name : "Colinz Bar"}</RestaurantName>
                        <ReviewTextContainer>
                            <ReviewTextContent>{review.text_content ? review.text_content : "Don't waste your time. Pizza dough good, thin crust but ingredients so so. Side of mixed vegetables very oily and mainly bell..."}</ReviewTextContent>
                            <ReadMoreLink to={'/restaurants/23'}>read more</ReadMoreLink>
                        </ReviewTextContainer>
                    </LatestReviewContainer>

                    <SocialContainer>
                        <Like review={review}/>
                        <CommentContainer>
                            <CommentTitle>Comment</CommentTitle>
                            <CommentCounter>{review.comments_counter ? review.comments_counter : "23"}</CommentCounter>
                        </CommentContainer>
                    </SocialContainer>

                    <LatestCommentsContainer>
                        <LatestCommentTitle>Latest comments</LatestCommentTitle>
                        <MostRecentCommentContainer>
                            <MostRecentCommentator>Colin Wirz</MostRecentCommentator>
                            <MostRecentCommentContent>Actually you have no taste!</MostRecentCommentContent>
                        </MostRecentCommentContainer>
                        <ScndMostRecentCommentContainer>
                            <ScndMostRecentCommentator>Laurent Meyer</ScndMostRecentCommentator>
                            <ScndMostRecentCommentContent>Sorry bro!</ScndMostRecentCommentContent>
                        </ScndMostRecentCommentContainer>
                    </LatestCommentsContainer>

                </BottomContainer>

            </ReviewBoxContainer>
        </>
    )
}
