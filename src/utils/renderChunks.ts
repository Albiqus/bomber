
import { CHUNKS_AMOUNT, LOCATION_MATTER, } from "../data/location"
import { Chunk } from "../types/Chunk"


const createChunks = () => {
    const chunks: any = {}
    for (let i = 1; i <= CHUNKS_AMOUNT; i++) {
        chunks[i] = { id: i, type: 'air' }
    }
    return chunks
}

const fillMatter = (chunks: Chunk[], level: number, matter: string) => {
    const matterIds = LOCATION_MATTER[matter][level]
 
    for (let key in chunks) {
        if (matterIds.includes(+key)) {
            chunks[key].type = matter
        }
    }

    return chunks
}


export const renderChunks = (level: number) => {
    let chunks = createChunks()
    chunks = fillMatter(chunks, level, 'wall')
    chunks = fillMatter(chunks, level, 'barrier')
    return chunks
}