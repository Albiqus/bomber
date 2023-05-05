import { SET_EXPLOSION_SOUND } from "../../data/actionTypes"


export const setExplosionSound = (status: boolean) => {
    return {
        type: SET_EXPLOSION_SOUND,
        payload: status
    }
}