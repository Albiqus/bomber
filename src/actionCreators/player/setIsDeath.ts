import { SET_IS_DEATH } from "../../data/actionTypes"


export const setIsDeath = (status: boolean) => {
    return {
        type: SET_IS_DEATH,
        payload: status
    }
}