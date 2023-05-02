import { renderChunks } from "../../utils/renderChunks";


const startState = {
    chunks: renderChunks('1'),
}

export const location = (state = startState, action: any) => {
    switch (action.type) {

        default:
            return state;
    }
}