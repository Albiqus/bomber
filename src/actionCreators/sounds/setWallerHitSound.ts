import { SET_WALLER_HIT_SOUND } from "../../data/actionTypes"


export const setWallerHitSound = (status: boolean) => {
    return {
        type: SET_WALLER_HIT_SOUND,
        payload: status
    }
}