import { SET_LOCATION } from "../../data/actionTypes"
import { Chunk } from "../../types/Chunk"


export const setLocation = (chunks: Chunk[]) => {
    return {
        type: SET_LOCATION,
        payload: chunks
    }
}