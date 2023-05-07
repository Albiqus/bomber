import { SET_IS_GAME_WINDOW, SET_IS_INITIAL_WINDOW, SET_IS_LOSS_WINDOW, SET_IS_MENU_WINDOW } from "../../data/actionTypes";


const startState = {
    isInitialWindow: true,
    isMenuWindow: false,
    isGameWindow: false,
    isLossWindow: false,
}

export const windows = (state = startState, action: any) => {
    switch (action.type) {
        case SET_IS_INITIAL_WINDOW: {
            return {
                ...state,
                isInitialWindow: action.payload
            }
        }
        case SET_IS_MENU_WINDOW: {
            return {
                ...state,
                isMenuWindow: action.payload
            }
        }
        case SET_IS_GAME_WINDOW: {
            return {
                ...state,
                isGameWindow: action.payload
            }
        }
        case SET_IS_LOSS_WINDOW: {
            return {
                ...state,
                isLossWindow: action.payload
            }
        }
        default:
            return state;
    }
}