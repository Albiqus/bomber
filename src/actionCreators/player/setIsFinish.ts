import { SET_IS_FINISH } from "../../data/actionTypes"


export const setIsFinish = (status: boolean) => {
    return {
        type: SET_IS_FINISH,
        payload: status
    }
}