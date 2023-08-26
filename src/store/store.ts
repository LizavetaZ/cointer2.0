
import {combineReducers, legacy_createStore as createStore} from "redux";
import {mainReducer} from "../reducer/mainReducer";


export const RootReducer=combineReducers({
    commonState: mainReducer
})

export const store=createStore(RootReducer)

export type RootReducerType = ReturnType<typeof RootReducer>
export type RootState = ReturnType<typeof store.getState>