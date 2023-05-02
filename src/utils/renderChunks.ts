
import { CHUNKS_AMOUNT, } from "../data/location"
import { MATTER } from "../data/matter"


const createChunks = () => {
    const chunks: any = {}
    for (let i = 1; i <= CHUNKS_AMOUNT; i++) {
        chunks[i] = { id: i, type: 'air' }
    }
    return chunks
}

const fillMatter = (chunks: any, level: string, matter: string) => {
    const matterIds = MATTER[matter][level]
    
    for (let key in chunks) {
        if (matterIds.includes(+key)) {
            chunks[key].type = matter
        }
    }

    return chunks
}


export const renderChunks = (level: string) => {
    let chunks = createChunks()
    chunks = fillMatter(chunks, level, 'wall')
    chunks = fillMatter(chunks, level, 'barrier')
    chunks = fillMatter(chunks, level, 'portal')
    return chunks
}