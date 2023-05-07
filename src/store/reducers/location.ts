import { RESET_BOMB, RESET_LOCATION_PARAMS, SET_EXPLODED_CHUNK_IDS, SET_LOCATION, THROW_BOMB } from "../../data/actionTypes";


const startState = {
    currentLevel: 1,
    chunks: null,
    explodedChunkIds: null,
    bombPos: null,
}

export const location = (state = startState, action: any) => {
    switch (action.type) {
        case SET_LOCATION: {
            return {
                ...state,
                chunks: action.payload
            }
        }
        case SET_EXPLODED_CHUNK_IDS: {
            return {
                ...state,
                explodedChunkIds: action.payload
            }
        }
        case RESET_LOCATION_PARAMS: {
            return {
                ...state,
                currentLevel: 1,
                chunks: null,
                explodedChunkIds: null,
            }
        }
        case THROW_BOMB: {
            return {
                ...state,
                bombPos: action.payload
            }
        }
        case RESET_BOMB: {
            return {
                ...state,
                bombPos: null
            }
        }
        default:
            return state;
    }
}