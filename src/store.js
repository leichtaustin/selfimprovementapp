import { configureStore, combineReducers } from '@reduxjs/toolkit';
import sprintCardSliceReducer from './components/sprintCard/sprintCardSlice';

export default configureStore({
    reducer: {
        sprintCard: sprintCardSliceReducer,
    }
})

const rootReducer = combineReducers({
    //add reducers here ex. user: userReducer
    sprintCard: sprintCardSliceReducer,
})

export const setupStore = preloadedState => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}