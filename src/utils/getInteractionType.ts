
export const getInteractionType = (keyCode: number) => {
    let interactionType;

    switch (keyCode) {
        case 87: interactionType = 'up'
            break
        case 68: interactionType = 'right'
            break
        case 83: interactionType = 'down'
            break
        case 65: interactionType = 'left'
            break
        case 32: interactionType = 'bomb'
            break
    }

    return interactionType
}