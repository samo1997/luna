import styled from 'styled-components'
import {theme} from './index'
import {NavLink} from "react-router-dom";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: ${theme.colorPrimaryBackgroundLightGrey};
`

export const FilterBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  height: 50px;
  width: 100%;
`

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  height: 100%;
  width: 80%; 
  background: ${theme.colorPrimaryBackgroundWhite};
  border: 1px solid ${theme.colorPrimaryGrey};
`

export const SearchBar = styled.input`
  height: 100%;
  width: 100%;
  font-size: 2.0rem;
  line-height: 2.3rem;
  font-weight: bold;
  padding: 18px;
  border: none;
  color: ${theme.colorPrimaryGrey};
  margin: 12.5px;
`

export const SelectCategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100%;
  width: 100%;
  
  background: ${theme.colorPrimaryBackgroundWhite};
  border: 1px solid ${theme.colorPrimaryGrey};
`

export const SelectCategory = styled.p`
  font-size: 2.0rem;
  line-height: 2.3rem;
  color: ${theme.colorPrimaryGrey};
`

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 100%;
  
  @media (max-width: 480px) {
    flex-wrap: wrap;
    display: contents;
  }
`

export const NavLinkRestaurants = styled(NavLink)`
  text-decoration: none;
  border-bottom: 3px solid ${theme.colorPrimaryGrey};
  
  &.active, :hover {
      border-bottom: 3px solid ${theme.colorPrimaryOrange};
  }
`

export const RestaurantsNavigatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 205px;
  padding-top: 19px;
`

export const RestaurantNavigatorTitle = styled.h2`
  font-size: 2.0rem;
  color: ${theme.colorTitleBlack};
  text-transform: uppercase;
  font-weight: bold;
  line-height: 2.3rem;
  margin-bottom: 11px;
`

export const NavLinkReviews = styled(NavLinkRestaurants)``
export const ReviewsNavigatorContainer = styled(RestaurantsNavigatorContainer)`
`
export const ReviewsNavigatorTitle = styled(RestaurantNavigatorTitle)``

export const NavLinkUsers = styled(NavLinkRestaurants)``
export const UsersNavigatorContainer = styled(RestaurantsNavigatorContainer)``
export const UsersNavigatorTitle = styled(RestaurantNavigatorTitle)``

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  width: 100%;
  padding-top: 42px;

`

