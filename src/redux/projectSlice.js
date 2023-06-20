import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

// selectors
export const getAllProjects = ({projects}) => projects;
export const getProjectById = ({projects}, projectId) => projects.filter(project => project.id === projectId);

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {}
})

export default projectsSlice.reducer;