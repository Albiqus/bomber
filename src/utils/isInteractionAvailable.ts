import { LOCATION_BORDERS } from "../data/location";
import { Chunk } from "../types/Chunk";


const getStep = (interactionType: string) => {
    let step = 0;
    switch (interactionType) {
        case 'up':
            step = -15
            break
        case 'right':
            step = 1
            break
        case 'down':
            step = 15
            break
        case 'left':
            step = -1
            break
    }
    return step
}


export const isInteractionAvailable = (chunks: Chunk[], playerPosition: number, interactionType: string, bombPos: number | null, isDeath: boolean, isFinish: boolean) => {
    if (isFinish) {
        return false
    }
    if (isDeath) {
        return false
    }
    if (interactionType === 'bomb') {
        return bombPos ? false : true
    }
    if (LOCATION_BORDERS[interactionType].includes(playerPosition)) {
        return false
    }

    const step = getStep(interactionType)
    const newMatterType = chunks[playerPosition + step].type
    if (newMatterType !== 'air' && newMatterType !== 'portal') {
        return false
    }
    return true
}