import { SET_EFFECTS_VOLUME, SET_MUSIC_VOLUME } from "../../data/actionTypes";


const startState = {
    musicVolume: 50,
    effectsVolume: 100,
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
        default:
            return state;
    }
}