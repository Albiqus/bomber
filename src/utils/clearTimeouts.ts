export const clearTimeouts = (lastTimerId: number) => {
    for (let i = 0; i <= lastTimerId; i++) {
        clearTimeout(i)
    }
}