import { RESET_WALLER_PARAMS, SET_WALLERS, SET_WALLER_CHUNK_IDS } from "../../data/actionTypes";

const startState = {
    wallers: null,
    wallerChunkIds: null,
}

export const waller = (state = startState, action: any) => {
    switch (action.type) {
        case SET_WALLERS: {
            return {
                ...state,
                wallers: action.payload
            }
        }
        case SET_WALLER_CHUNK_IDS: {
            return {
                ...state,
                wallerChunkIds: action.payload
            }
        }
        case RESET_WALLER_PARAMS: {
            return {
                ...state,
                wallers: null,
                wallerChunkIds: null,
            }
        }
        default:
            return state;
    }
}