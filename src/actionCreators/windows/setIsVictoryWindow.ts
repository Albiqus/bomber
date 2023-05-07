import {  SET_IS_VICTORY_WINDOW } from "../../data/actionTypes"


export const setIsVictoryWindow = (status: boolean) => {
    return {
        type: SET_IS_VICTORY_WINDOW,
        payload: status
    }
}