import { Chunk } from "../types/Chunk"


export const getChunksAfterExplosion = (chunks: Chunk[], destroyedIds: number[]) => {
    const newChunks = JSON.parse(JSON.stringify(chunks))
    
    destroyedIds.forEach((id) => {
        if (newChunks[id].type === 'barrier') {
            newChunks[id].type = 'air'
        }
    })

    return newChunks
}