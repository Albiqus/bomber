import { waller } from './reducers/waller';
import { player } from './reducers/player';
import { location } from './reducers/location';
import { sounds } from './reducers/sounds';
import { createStore, combineReducers } from "redux";
import { windows } from "./reducers/windows";


let reducers = combineReducers({
    windows,
    sounds,
    location,
    player,
    waller
})

let store = createStore(reducers)

export { store }
export type RootState = ReturnType<typeof store.getState>