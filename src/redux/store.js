import { combineReducers } from "redux"

import { configureStore } from '@reduxjs/toolkit'
import initialState from "./initialState"
import { projectsSlice } from "./projectSlice"


const subreducers = {
    projects: projectsSlice.reducer,
}

const reducer = combineReducers(subreducers)


export default configureStore({
    reducer,
    initialState
})