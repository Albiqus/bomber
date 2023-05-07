import { SET_PLAYER_POS } from "../../data/actionTypes"


export const setPlayerPos = (id: number) => {
    return {
        type: SET_PLAYER_POS,
        payload: id
    }
}