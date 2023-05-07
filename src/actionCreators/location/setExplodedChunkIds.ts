import { SET_EXPLODED_CHUNK_IDS } from "../../data/actionTypes"


export const setExplodedChunkIds = (chunkIds: number[]) => {
    return {
        type: SET_EXPLODED_CHUNK_IDS,
        payload: chunkIds
    }
}