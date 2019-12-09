import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
    selectedVideos: [],
    playingVideo: '4fHw4GeW3EU'
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
                selectedVideos: [state.selectedVideos.filter((video) => video !== action.payload)]
            }
        case 'PLAY_VIDEO':
            return {
                ...state,
                playingVideo: action.payload
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
