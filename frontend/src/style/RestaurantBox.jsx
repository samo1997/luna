import styled from 'styled-components'
import {theme} from "./index";

export const RestaurantBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin: 14.5px;
  height: 410px;
  width: 271px;
  border: 1px solid ${theme.colorPrimaryGrey};
  box-sizing: border-box;
  border-radius: 3px;  
`
export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  height: 32%;
  width: 100%;
    
  background: ${theme.colorPrimaryBackgroundWhite};    
  :hover {
    background: antiquewhite;
  }
  
`
export const Overline = styled.div`
  border-top: 8px solid #E47D31;
  
  height: 8px;
  width: 100%;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 11px;
  
  height: 100%;
  width: 100%;
`
export const RestaurantName = styled.p`
  font-size: 2.0rem;
  line-height: 2.3rem;
`

export const Address = styled(RestaurantName)`
  font-size: 1.8rem;
  line-height: 2.07rem;
`

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  height: 27px;
  width: 100%;
`
export const AmountReviews = styled(RestaurantName)`
  font-weight: 300;
  font-size: 2.0rem;
  line-height: 2.3rem;
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 68%;
  width: 100%;  

`

export const RestaurantPicture = styled.img`
  height: 100%;
  width: -moz-available;
  width: 100%;
  object-fit: cover;  
`


