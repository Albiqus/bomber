import { SET_IS_MENU_WINDOW } from "../../data/actionTypes"

export const setIsMenuWindow = (status: boolean) => {
    return {
        type: SET_IS_MENU_WINDOW,
        payload: status
    }
}