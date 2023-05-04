import { MOVE_TO_DOWN, MOVE_TO_LEFT, MOVE_TO_RIGHT, MOVE_TO_UP, THROW_BOMB } from "../../data/actionTypes";

const startState = {
    playerPosition: 113,
    gazeDirection: 'right',
    animationCoords: {
        x: 0,
        y: 0,
    },
}

export const player = (state = startState, action: any) => {
    switch (action.type) {
        case MOVE_TO_UP: {
            return {
                ...state,
                playerPosition: state.playerPosition - 15,
                animationCoords: {
                    x: 0,
                    y: 100,
                }
            }
        }
        case MOVE_TO_RIGHT: {
            return {
                ...state,
                playerPosition: state.playerPosition + 1,
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
                playerPosition: state.playerPosition + 15,
                animationCoords: {
                    x: 0,
                    y: -100,
                }
            }
        }
        case MOVE_TO_LEFT: {
            return {
                ...state,
                playerPosition: state.playerPosition - 1,
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

            }
        }

        default:
            return state;
    }
}