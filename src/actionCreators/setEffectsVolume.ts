import { SET_EFFECTS_VOLUME } from "../data/actionTypes"

export const setEffectsVolume = (volume: string) => {
    return {
        type: SET_EFFECTS_VOLUME,
        payload: volume
    }
}