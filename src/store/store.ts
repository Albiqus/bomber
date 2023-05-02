import { location } from './reducers/location';
import { sounds } from './reducers/sounds';
import { createStore, combineReducers } from "redux";
import { windows } from "./reducers/windows";


let reducers = combineReducers({
    windows,
    sounds,
    location
})

let store = createStore(reducers)

export { store }
export type RootState = ReturnType<typeof store.getState>