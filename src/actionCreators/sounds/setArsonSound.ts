import { SET_ARSON_SOUND } from "../../data/actionTypes"


export const setArsonSound = (status: boolean) => {
    return {
        type: SET_ARSON_SOUND,
        payload: status
    }
}