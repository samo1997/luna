import {SET_RESTAURANTS_ALL} from "../../../helpers/constants";

const initialState = {
    restaurantsAll: [[],[],[],[]],
}

export default function restaurantReducer (state = initialState, action) {
    switch (action.type) {
        case SET_RESTAURANTS_ALL: {
            const newState = {...state}
            if (action.payload.code === "token_not_valid" || undefined)
                return newState
            else
                newState.restaurantsAll = action.payload
            newState.restaurantsAll.reverse()
            return newState
        }
        default: {
            return state
        }
    }
}
