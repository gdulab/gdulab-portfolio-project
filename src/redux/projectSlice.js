import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

// selectors
export const getAllProjects = state => state.projects.projects;
export const getProjectById = ({projects}, projectId) => projects.filter(project => project.id === projectId);

export const projectsSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {}
})

export default projectsSlice.reducer;