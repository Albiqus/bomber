export const getLevels = (lastLevel: number) => {
    const levels = []

    for (let i = 1; i <= 10; i++) {
        levels.push(
            {
                id: i,
                isAccess: lastLevel >= i ? true : false
            }
        )
    }

    return levels
}