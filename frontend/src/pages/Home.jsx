import React, {useEffect} from 'react'
import Header from "../components/header";
import Footer from "../components/footer";
import {
    BottomContainer,
    HomeContainer, RestaurantFeed,
    Searchbar, SearchBarContainer,
    SearchButton,
    SearchContainer,
    Title,
    TitleContainer, Underline
} from "../style/Home";
import {RestaurantBox} from "../components/RestaurantBox";
import {useDispatch, useSelector} from "react-redux";
import {restaurantAction} from "../store/actions/restaurantActions";
import {SET_RESTAURANTS_ALL} from "../helpers/constants";


export const Home = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.restaurantReducer.restaurantsAll)

    useEffect(() => {
        const fetchRestaurantData = async () => {
            await dispatch(restaurantAction('restaurants/', 'GET', SET_RESTAURANTS_ALL));
        }
        fetchRestaurantData()
        return function cleanup() {};
    }, [dispatch]);

    return (
        <>
            <Header />
                <HomeContainer>
                    <SearchContainer>
                        <SearchBarContainer>
                            <Searchbar placeholder="Search..."></Searchbar>
                            <SearchButton>Search</SearchButton>
                        </SearchBarContainer>
                    </SearchContainer>
                    <BottomContainer>
                        <TitleContainer>
                            <Title>Best Rated Restaurants</Title>
                            <Underline></Underline>
                        </TitleContainer>
                        <RestaurantFeed>
                            {restaurants[0] ? <RestaurantBox key={restaurants[0].id} restaurant={restaurants[0]}/> : null}
                            {restaurants[1] ? <RestaurantBox key={restaurants[1].id} restaurant={restaurants[1]}/> : null}
                            {restaurants[2] ? <RestaurantBox key={restaurants[2].id} restaurant={restaurants[2]}/> : null}
                            {restaurants[3] ? <RestaurantBox key={restaurants[3].id} restaurant={restaurants[3]}/> : null}
                        </RestaurantFeed>
                    </BottomContainer>
                </HomeContainer>
            <Footer />
        </>
    )
}
