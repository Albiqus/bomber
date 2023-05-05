import { SET_ARSON_SOUND, SET_EFFECTS_VOLUME, SET_EXPLOSION_SOUND, SET_MUSIC_VOLUME } from "../../data/actionTypes";


const startState = {
    musicVolume: 50,
    effectsVolume: 100,
    arsonSound: false,
    explosionSound: false,
}

export const sounds = (state = startState, action: any) => {
    switch (action.type) {
        case SET_MUSIC_VOLUME: {
            return {
                ...state,
                musicVolume: action.payload
            }
        }
        case SET_EFFECTS_VOLUME: {
            return {
                ...state,
                effectsVolume: action.payload
            }
        }
        case SET_ARSON_SOUND: {
            return {
                ...state,
                arsonSound: action.payload
            }
        }
        case SET_EXPLOSION_SOUND: {
            return {
                ...state,
                explosionSound: action.payload
            }
        }
        default:
            return state;
    }
}