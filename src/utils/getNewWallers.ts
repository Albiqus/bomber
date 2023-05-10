import { WallerType } from "../types/Waller";


const getNextDirection = (curId: number, trajectory: number[], direction: string) => {
    if (curId === trajectory.at(-2) && direction === 'forward') {
        return 'back'
    }
    if (curId === trajectory[1] && direction === 'back') {
        return 'forward'
    }
    return direction
}

const getNextId = (direction: string, axis: string, curId: number) => {
    if (direction === 'forward') {
        curId += axis === 'vertical' ? 15 : 1
    } else {
        curId += axis === 'vertical' ? -15 : -1
    }
    return curId
}

const getNextAnimCoords = (direction: string, axis: string) => {
    if (direction === 'forward') {
        return axis === 'vertical' ? { x: 0, y: -100 } : { x: -100, y: 0, }
    } else {
        return axis === 'vertical' ? { x: 0, y: 100 } : { x: 100, y: 0, }
    }
}

export const getNewWallers = (wallerPositions: WallerType[]) => {
    return JSON.parse(JSON.stringify(wallerPositions))

        .map((waller: WallerType) => {
            let newId = getNextId(waller.direction, waller.axis, waller.id)
            let newDirection = getNextDirection(waller.id, waller.trajectory, waller.direction)
            let newAnimCoords = getNextAnimCoords(waller.direction, waller.axis)

            return {
                ...waller,
                id: newId,
                direction: newDirection,
                animCoords: newAnimCoords,
                prevId: waller.id
            }
        })
}