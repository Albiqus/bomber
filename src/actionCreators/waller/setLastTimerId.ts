import { SET_LAST_TIMER_ID } from "../../data/actionTypes"


export const setLastTimerId = (id: any) => {
    return {
        type: SET_LAST_TIMER_ID,
        payload: id
    }
}