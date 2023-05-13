import { SET_LEVEL } from "../../data/actionTypes"


export const setLevel = (level: number) => {
    return {
        type: SET_LEVEL,
        payload: level
    }
}