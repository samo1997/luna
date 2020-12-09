import styled from 'styled-components'
import {theme} from "./index";
import {NavLink} from "react-router-dom";

export const ReviewBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  margin: 14.5px;
  height: 410px;
  width: 271px;
  border: 1px solid ${theme.colorPrimaryGrey};
  box-sizing: border-box;
  border-radius: 3px;  
  background: ${theme.colorPrimaryBackgroundWhite};  
  :hover {
    background: antiquewhite;
  }
`

export const UserBoxContainer = styled(ReviewBoxContainer)`
  height: 192px;
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  height: 74.5px;
  width: 100%;  
`

export const Overline = styled.div`
  border-top: 8px solid ${theme.colorPrimaryOrange};

  height: 8px;
  width: 100%;
`

export const ProfileHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  border-bottom: 1px solid ${theme.colorPrimaryGrey};  
  width: 100%;
`

export const ProfilePictureContainer = styled.div`
  width: 66px;
  height: 66px;
`

export const ProfilePicture = styled.img`
  height: 100%;
  width: 100%;
  width: -moz-available;
  object-fit: cover;
`

export const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  
  padding: 8px;  
  height: 100%;
  width: 204px;
`

export const Name = styled.p`
  font-weight: bold;
  font-size: 2.0rem;
  line-height: 2.3rem;
  color: ${theme.colorPrimaryOrange};
`

export const TotalReviews = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${theme.colorTitleBlack};
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding-left: 8.5px;
  padding-right: 8.5px;
  height: 333px;
  width: 100%; 
`

export const BottomContainerUserbox = styled(BottomContainer)`
  height: 115px;
`

export const LatestReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  padding-top: 14.5px;
  padding-bottom: 14.5px;
  height: 145px;
  width: 100%; 
`

export const RestaurantName = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: ${theme.colorPrimaryOrange};
  margin-bottom: 8px;
  margin-top: 4px;
`

export const ReviewTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  width: 100%;
`

export const ReviewTextContent = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${theme.colorTitleBlack};
  
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 8rem;
`

export const ReadMoreLink = styled(NavLink)`
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${theme.colorPrimaryOrange};
  text-transform: lowercase;
  text-decoration: none;
  align-self: flex-end;
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  height: 33px;
  width: 100%;
`

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
  margin-right: 1px;
  background: ${theme.colorButtonGrey};
  border: none;
  border-radius: 28px 0 0 28px;
  height: 33px;
  width: 51%;
  
  :hover {
    background: ${theme.colorPrimaryGrey};
  }
`

export const LikeTitle = styled.p`
  color: ${theme.colorPrimaryBackgroundWhite};
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 1.8rem;
`

export const LikeCounter = styled(LikeTitle)``

export const CommentContainer = styled(LikeContainer)`
  width: 59%;
  border-radius: 0 28px 28px 0;
`

export const CommentTitle = styled(LikeTitle)``

export const CommentCounter = styled(LikeTitle)``

export const LatestCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  
  height: 155px;
  width: 100%; 
`

export const LatestCommentTitle = styled.p`
  font-weight: 300;
  font-size: 2.0rem;
  line-height: 2.3rem;
  color: black;
`

export const MostRecentCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
  
  width: 100%; 
`

export const MostRecentCommentator = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${theme.colorPrimaryOrange};
`

export const MostRecentCommentContent = styled.p`
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: black;
`

export const ScndMostRecentCommentContainer = styled(MostRecentCommentContainer)``

export const ScndMostRecentCommentator = styled(MostRecentCommentator)``

export const ScndMostRecentCommentContent = styled(MostRecentCommentContent)``


