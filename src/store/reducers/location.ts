import { RESET_BOMB, RESET_LOCATION_PARAMS, SET_EXPLODED_CHUNK_IDS, SET_LOCATION, SET_NEXT_LEVEL, SET_PORTAL_POS, THROW_BOMB } from "../../data/actionTypes";


const startState = {
    currentLevel: 2,
    chunks: null,
    explodedChunkIds: null,
    bombPos: null,
    portalPos: null,
}

export const location = (state = startState, action: any) => {
    switch (action.type) {
        case SET_NEXT_LEVEL: {
            return {
                ...state,
                currentLevel: state.currentLevel + 1

            }
        }
        case SET_LOCATION: {
            return {
                ...state,
                chunks: action.payload

            }
        }
        case SET_PORTAL_POS: {
            return {
                ...state,
                portalPos: action.payload
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