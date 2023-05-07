import { SET_PLAYER_DEATH_SOUND } from "../../data/actionTypes"


export const setPlayerDeathSound = (status: boolean) => {
    return {
        type: SET_PLAYER_DEATH_SOUND,
        payload: status
    }
}