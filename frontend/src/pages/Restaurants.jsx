import React, {useEffect} from 'react'
import {
    FeedContainer,
    FilterBarContainer,
    MainContainer,
    NavigationContainer, NavLinkRestaurants, NavLinkReviews, NavLinkUsers,
    RestaurantNavigatorTitle, RestaurantsNavigatorContainer,
    ReviewsNavigatorContainer, ReviewsNavigatorTitle, SearchBar,
    SearchBarContainer,
    SelectCategory,
    SelectCategoryContainer, UsersNavigatorContainer, UsersNavigatorTitle
} from "../style/Restaurants";
import {ReviewsFeed} from "../components/ReviewsFeed";
import {UsersFeed} from "../components/UsersFeed";
import {RestaurantsFeed} from "../components/RestaurantsFeed";
import {useLocation} from 'react-router-dom'
import Header from "../components/header";
import {SET_RESTAURANTS_ALL, SET_REVIEWS_ALL} from '../helpers/constants'
import {restaurantAction} from "../store/actions/restaurantActions";
import {useDispatch, useSelector} from "react-redux";
import Footer from "../components/footer";
import {reviewAction} from "../store/actions/reviewActions";


export const Restaurants = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.restaurantReducer.restaurantsAll)
    const reviews = useSelector(state => state.reviewReducer.reviewsAll)
    const location = useLocation();

    useEffect(() => {
        const fetchRestaurantData = async () => {
            await dispatch(restaurantAction('restaurants/', 'GET', SET_RESTAURANTS_ALL));
        }
        fetchRestaurantData()
        return function cleanup() {};
    }, [dispatch]);

    useEffect(() => {
        const fetchRestaurantData = async () => {
            await dispatch(reviewAction('reviews/', 'GET', SET_REVIEWS_ALL));
        }
        fetchRestaurantData()
        return function cleanup() {};
    }, [dispatch]);

    return (
        <>
            <Header />
            <MainContainer>
                <FilterBarContainer>
                    <SearchBarContainer>
                        <SearchBar placeholder="Search"></SearchBar>
                    </SearchBarContainer>
                    <SelectCategoryContainer>
                        <SelectCategory>Select a category...</SelectCategory>
                    </SelectCategoryContainer>
                </FilterBarContainer>
                <NavigationContainer>
                    <NavLinkRestaurants to={'/search/restaurants'}>
                        <RestaurantsNavigatorContainer>
                            <RestaurantNavigatorTitle>Restaurants</RestaurantNavigatorTitle>
                        </RestaurantsNavigatorContainer>
                    </NavLinkRestaurants>
                    <NavLinkReviews to={'/search/reviews'}>
                        <ReviewsNavigatorContainer>
                            <ReviewsNavigatorTitle>Reviews</ReviewsNavigatorTitle>
                        </ReviewsNavigatorContainer>
                    </NavLinkReviews>
                    <NavLinkUsers to={'/search/users'}>
                        <UsersNavigatorContainer>
                            <UsersNavigatorTitle>Users</UsersNavigatorTitle>
                        </UsersNavigatorContainer>
                    </NavLinkUsers>
                </NavigationContainer>
                <FeedContainer>
                    {location.pathname === '/search/restaurants' && <RestaurantsFeed restaurants={restaurants} />}
                    {location.pathname === '/search/reviews' && <ReviewsFeed reviews={reviews} />}
                    {location.pathname === '/search/users' && <UsersFeed reviews={reviews} />}
                </FeedContainer>
            </MainContainer>
            <Footer />
        </>
    )
}
