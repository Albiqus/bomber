import { MOVE_TO_DOWN, MOVE_TO_LEFT, MOVE_TO_RIGHT, MOVE_TO_UP, RESET_PLAYER_PARAMS, SET_IS_DEATH, SET_IS_FINISH, SET_PLAYER_POS } from "../../data/actionTypes";

const startState = {
    playerPos: null,
    gazeDirection: 'right',
    animCoords: {
        x: 0,
        y: 0,
    },
    isDeath: false,
    isFinish: false
}

export const player = (state = startState, action: any) => {
    switch (action.type) {
        case SET_PLAYER_POS: {
            return {
                ...state,
                playerPos: action.payload
            }
        }
        case SET_IS_FINISH: {
            return {
                ...state,
                isFinish: action.payload
            }
        }
        case MOVE_TO_UP: {
            return {
                ...state,
                playerPos: state.playerPos&& state.playerPos - 15,
                animCoords: {
                    x: 0,
                    y: 100,
                }
            }
        }
        case MOVE_TO_RIGHT: {
            return {
                ...state,
                playerPos: state.playerPos && state.playerPos + 1,
                animCoords: {
                    x: -100,
                    y: 0,
                },
                gazeDirection: 'right',
            }
        }
        case MOVE_TO_DOWN: {
            return {
                ...state,
                playerPos: state.playerPos && state.playerPos + 15,
                animCoords: {
                    x: 0,
                    y: -100,
                }
            }
        }
        case MOVE_TO_LEFT: {
            return {
                ...state,
                playerPos: state.playerPos && state.playerPos - 1,
                animCoords: {
                    x: 100,
                    y: 0,
                },
                gazeDirection: 'left',
            }
        }
        case SET_IS_DEATH: {
            return {
                ...state,
                isDeath: action.payload
            }
        }
        case RESET_PLAYER_PARAMS: {
            return {
                ...state,
                playerPos: 113,
                gazeDirection: 'right',
                animCoords: {
                    x: 0,
                    y: 0,
                },
                bombPos: null,
                isDeath: false,
                isFinish: false
            }
        }
        default:
            return state;
    }
}