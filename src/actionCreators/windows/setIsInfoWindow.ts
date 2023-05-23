import { SET_IS_INFO_WINDOW } from "../../data/actionTypes"


export const setIsInfoWindow = (status: boolean) => {
    return {
        type: SET_IS_INFO_WINDOW,
        payload: status
    }
}