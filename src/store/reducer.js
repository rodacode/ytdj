import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
    selectedVideos: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_VIDEO':
            return {
                ...state,
                selectedVideos: [...state.selectedVideos, action.payload]
            }
        case 'REMOVE_VIDEO':
            return {
                ...state,
                selectedVideos: [state.selectedVideos.map((video) => video.etag !== action.payload.etag)]
            }
        default:
            return state
    }
}
export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools()
)
