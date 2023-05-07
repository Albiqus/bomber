

import { SET_PLAYER_FINISH_SOUND } from "../../data/actionTypes"


export const setPlayerFinishSound = (status: boolean) => {
    return {
        type: SET_PLAYER_FINISH_SOUND,
        payload: status
    }
}