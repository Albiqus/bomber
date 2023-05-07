export const getDestroyedChunkIds = (bombPos: number) => {
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