import { SET_WALLER_CHUNK_IDS } from "../../data/actionTypes"


export const setWallerChunkIds = (ids: number[]) => {
    return {
        type: SET_WALLER_CHUNK_IDS,
        payload: ids
    }
}