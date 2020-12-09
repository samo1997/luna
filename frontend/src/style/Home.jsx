import styled from 'styled-components'
import homeBackgroundImg from '../assets/images/home_background.png'
import {theme} from './index'
import {StandardButton} from "./Buttons";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: calc(100vh - 73px - 91px);
  width: 100%;
  background: ${theme.colorPrimaryBackgroundLightGrey};
  
  @media (max-width: 480px) {
    height: 100%;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 35%;
  width: 100%;
  background-image: url("${homeBackgroundImg}");
  background-repeat: no-repeat;
  background-size: cover;  
  
  @media (max-width: 480px) {
    height: 280px;
  }
`

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  
  height: 58px;
  width: 52%;
`


export const Searchbar = styled.input`
  height: 100%;
  width: 65%;
  border: none;
  border-radius: 3px;
  font-size: 2.0rem;
  line-height: 2.0rem;
  padding: 18px;
  color: ${theme.colorTitleBlack};
  margin: 12.5px;
`

export const SearchButton = styled(StandardButton)`
  margin: 12.5px;
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  height: 65%;
  width: 100%;
  overflow: auto;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 68px;
  width: 100%;
`

export const Title = styled.h2`
  font-size: 2.4rem;
  color: ${theme.colorTitleBlack};
  text-transform: uppercase;
  font-weight: bold;
  line-height: 2.8rem;
  margin-top: 29px;
  margin-bottom: 11px;
`

export const Underline = styled.div`
  width: 18%;
  height: 3px;
  border-bottom: 3px solid ${theme.colorPrimaryOrange};
`

export const RestaurantFeed = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-top: calc(42px - 14.5px);
  
  height: calc(100% - 68px);
  width: 81%;
  max-width: calc(4 * 272px + 3 * 38px);
`






