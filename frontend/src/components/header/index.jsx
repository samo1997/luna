import { connect } from 'react-redux'
import React from 'react';
import {
    HeaderContainer, HeaderLeft, HeaderRight, HeaderLogo,
    NavigationButtons, HomeBtn, SearchBtn, ProfileBtn,
    SignupLoginButtons, SignupBtn, LoginBtn, CreateRestaurantBtn
} from "../../style/Header";


const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderLogo />
            </HeaderLeft>
            <HeaderRight>
                <NavigationButtons>
                    <CreateRestaurantBtn to={'/create-restaurant'}>Add Restaurant</CreateRestaurantBtn>
                    <HomeBtn to={'/home'}>Home</HomeBtn>
                    <SearchBtn to={'/search/'}>Search</SearchBtn>
                    <ProfileBtn to={'/profile'}>Profile</ProfileBtn>
                </NavigationButtons>
                <SignupLoginButtons>
                    <SignupBtn to={'/auth/sign'}>Signup</SignupBtn>
                    <LoginBtn to={'/auth/login'}>Login</LoginBtn>
                </SignupLoginButtons>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default connect()(Header);
