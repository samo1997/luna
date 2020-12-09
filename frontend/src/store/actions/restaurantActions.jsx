import baseUrl from "../../helpers/baseUrl";

export const setRestaurantData = (type, data) => {
    return {
        type: type,
        payload: data,
    }
}

export const restaurantAction = (urlPath, method, type, body) => async (dispatch, getState) => {
    const { loginReducer:{ token } } = getState();
    const url = baseUrl + urlPath;
    const config = {
        method: method,
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: body
    };

    const response = await fetch(url, config).catch((error) => console.log('in post fetch:', error));
    const data = await response.json();

    dispatch(setRestaurantData(type, data));
};
