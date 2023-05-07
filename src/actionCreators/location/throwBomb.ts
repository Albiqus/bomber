import { THROW_BOMB } from "../../data/actionTypes"


export const throwBomb = (id: number) => {
    return {
        type: THROW_BOMB,
        payload: id
    }
}