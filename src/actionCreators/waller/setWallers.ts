import { SET_WALLERS } from "../../data/actionTypes"
import { WallerType } from "../../types/Waller"


export const setWallers = (wallers: WallerType[]) => {
    return {
        type: SET_WALLERS,
        payload: wallers
    }
}