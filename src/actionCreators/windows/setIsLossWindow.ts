import { SET_IS_LOSS_WINDOW } from "../../data/actionTypes"


export const setIsLossWindow = (status: boolean) => {
    return {
        type: SET_IS_LOSS_WINDOW,
        payload: status
    }
}