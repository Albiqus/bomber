import { SET_LOCATION } from "../../data/actionTypes";
import { renderChunks } from "../../utils/renderChunks";


const startState = {
    chunks: renderChunks('1'),
}

export const location = (state = startState, action: any) => {
    switch (action.type) {
        case SET_LOCATION: {
            return {
                ...state,
                chunks: action.payload
            }
        }
        default:
            return state;
    }
}