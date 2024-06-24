import {createSlice} from "@reduxjs/toolkit";


interface IResizablePanel {
    sidebarPanelSize: number;
    contentPanelSize: number;
}


const initialState: IResizablePanel = {
    sidebarPanelSize: 5,
    contentPanelSize: 95,
}

const resizableSlice = createSlice({
    name: 'resizableState',
    initialState,
    reducers: {
        expandSidebar: (state) => {
            state.sidebarPanelSize = 20
            state.contentPanelSize = 100 - state.sidebarPanelSize;
        },
        shrinkSidebar: (state) => {
            state.sidebarPanelSize = initialState.sidebarPanelSize;
            state.contentPanelSize = initialState.contentPanelSize;

        }
    }
})



export const resizableSizeOnDefault = (state: { resizableState: IResizablePanel }) => state.resizableState.sidebarPanelSize === 5 && state.resizableState.contentPanelSize === 95;




export default resizableSlice.reducer;
export const { expandSidebar, shrinkSidebar } = resizableSlice.actions;