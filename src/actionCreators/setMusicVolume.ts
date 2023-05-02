import { SET_MUSIC_VOLUME } from "../data/actionTypes"

export const setMusicVolume = (volume: string) => {
    return {
        type: SET_MUSIC_VOLUME,
        payload: volume
    }
}