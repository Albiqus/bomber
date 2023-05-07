import { SET_PORTAL_POS } from "../../data/actionTypes"


export const setPortalPos = (id: number) => {
    return {
        type: SET_PORTAL_POS,
        payload: id
    }
}