import { SET_WALLER_SOUND } from "../../data/actionTypes"


export const setWallerSound = (status: boolean) => {
    return {
        type: SET_WALLER_SOUND,
        payload: status
    }
}