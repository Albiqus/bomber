import { Chunk } from "../types/Chunk"


const getDestroyedBarriers = (bombPos: number) => {
    let barrierIds = []
    let currentId = bombPos - 16

    for (let i = 1; i <= 9; i++) {
        barrierIds.push(currentId)
        if (i % 3 === 0) {
            currentId += 13
        } else currentId++
    }

    return barrierIds
}

export const getChunksAfterExplosion = (chunks: Chunk[], bombPos: number) => {
    const destroyedBarrierIds = getDestroyedBarriers(bombPos)
    const newChunks = JSON.parse(JSON.stringify(chunks))

    destroyedBarrierIds.forEach((id) => {
        if (newChunks[id].type === 'barrier') {
            newChunks[id].type = 'air'
        }
    })

    return newChunks
}