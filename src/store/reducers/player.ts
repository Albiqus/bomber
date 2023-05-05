import { MOVE_TO_DOWN, MOVE_TO_LEFT, MOVE_TO_RIGHT, MOVE_TO_UP, RESET_BOMB, THROW_BOMB } from "../../data/actionTypes";

const startState = {
    playerPos: 113,
    gazeDirection: 'right',
    animationCoords: {
        x: 0,
        y: 0,
    },
    bombPos: null,
}

export const player = (state = startState, action: any) => {
    switch (action.type) {
        case MOVE_TO_UP: {
            return {
                ...state,
                playerPos: state.playerPos - 15,
                animationCoords: {
                    x: 0,
                    y: 100,
                }
            }
        }
        case MOVE_TO_RIGHT: {
            return {
                ...state,
                playerPos: state.playerPos + 1,
                animationCoords: {
                    x: -100,
                    y: 0,
                },
                gazeDirection: 'right',
            }
        }
        case MOVE_TO_DOWN: {
            return {
                ...state,
                playerPos: state.playerPos + 15,
                animationCoords: {
                    x: 0,
                    y: -100,
                }
            }
        }
        case MOVE_TO_LEFT: {
            return {
                ...state,
                playerPos: state.playerPos - 1,
                animationCoords: {
                    x: 100,
                    y: 0,
                },
                gazeDirection: 'left',
            }
        }
        case THROW_BOMB: {
            return {
                ...state,
                bombPos: state.playerPos
            }
        }
        case RESET_BOMB: {
            return {
                ...state,
                bombPos: null
            }
        }
        default:
            return state;
    }
}