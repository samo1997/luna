import styled from 'styled-components'
import {theme} from './index'
import headerLogo from '../assets/images/logo-luna.png'
import {NavLink} from "react-router-dom";



export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid ${theme.colorPrimaryGrey};
    justify-content: space-between;
    height: 73px;
    
    @media (max-width: 480px) {
      flex-wrap: wrap;
      display: contents;
      width: auto;
      height: auto;
      padding: 50px;
      justify-content: center;
    }
`

export const HeaderLeft = styled.div`
    display: flex;
    padding-left: 30px;
    align-items: center;
    
    @media (max-width: 480px) {
      justify-content: center;
      padding: 0;
      padding-top: 15px;
      padding-bottom: 15px;
    }
`

export const HeaderRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    
    @media (max-width: 480px) {
      flex-wrap: wrap;
      display: contents;
      width: auto;
      height: auto;
      padding: 50px;
      justify-content: center;
    }
`

export const HeaderLogo = styled.div`
    background-image: url("${headerLogo}");
    height: 24px;
    width: 102px;
`

export const NavigationButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 2vw;
    padding-right: 2vw;
    
    @media (max-width: 480px) {
      flex-wrap: wrap;
      display: contents;
      width: auto;
      height: auto;
      padding: 50px;
      justify-content: center;
    }
`

export const HomeBtn = styled(NavLink)`
    display: flex;
    font-weight: bold;
    height: 71px;
    //width: 64px;
    left: 16px;
    font-family: Helvetica;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: center;
    align-items: center;
    border-bottom: 3px solid ${theme.colorTextWhite};
    text-decoration: none;
    
    &.active, :hover {
      border-bottom: 3px solid ${theme.colorPrimaryOrange};
    }
    
    @media (max-width: 480px) {
      justify-content: center;
    }
`

export const CreateRestaurantBtn = styled(HomeBtn)``

export const SearchBtn = styled(NavLink)`
    height: 71px;
    //width: 64px;
    left: 16px;
    font-family: Helvetica;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: center;
    display: flex;
    align-items: center;
    border-bottom: 3px solid ${theme.colorTextWhite};
    text-decoration: none;
    
    &.active, :hover {
      border-bottom: 3px solid ${theme.colorPrimaryOrange};
    }
    
    @media (max-width: 480px) {
      justify-content: center;
    }
`

export const ProfileBtn = styled(NavLink)`
    height: 71px;
    //width: 100%;
    left: 16px;
    font-family: Helvetica;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: center;
    display: flex;
    align-items: center;
    border-bottom: 3px solid ${theme.colorTextWhite};
    text-decoration: none;

    &.active, :hover {
      border-bottom: 3px solid ${theme.colorPrimaryOrange};
    }
    
    @media (max-width: 480px) {
      justify-content: center;
    }
`

export const SignupLoginButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
    font-family: Helvetica;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: center;
    text-transform: uppercase;  
    
    @media (max-width: 480px) {
      justify-content: center;
      padding: 0;
      padding-top: 15px;
      padding-bottom: 15px;
    }
`

export const SignupBtn = styled.div`
    margin-right: 1px;
    width: 100px;
    height: 41px;
    border: none;
    border-radius: 28px 0 0 28px;
    background-color: ${theme.colorPrimaryOrange};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
    :hover {
      background-color: orange;
    }
`

export const LoginBtn = styled(NavLink)`
    width: 100px;
    height: 41px;
    border: none;
    border-radius: 0 28px 28px 0;
    background-color: ${theme.colorPrimaryOrange};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    
    :hover {
      background-color: orange;
    }
`

export const LogoutBtn = styled.div`
    width: 201px;
    height: 41px;
    border: none;
    border-radius: 28px;
    background-color: ${theme.colorPrimaryOrange};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 480px) {
      justify-content: center;
    }
`

