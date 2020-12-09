import {SET_REVIEWS_ALL} from "../../../helpers/constants";

const initialState = {
    reviewsAll: [[],[],[],[],[]],
}

export default function reviewReducer (state = initialState, action) {
    switch (action.type) {
        case SET_REVIEWS_ALL: {
            const newState = {...state}
            if (action.payload.code === "token_not_valid" || undefined)
                return newState
            else
                newState.reviewsAll = action.payload
            newState.reviewsAll.reverse()
            return newState
        }
        default: {
            return state
        }
    }
}
