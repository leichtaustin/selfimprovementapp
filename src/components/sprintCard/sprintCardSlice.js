import { createSlice } from "@reduxjs/toolkit";
import { goalArray } from "../../utils/data";

export const sprintCardSlice = createSlice({
    name: 'sprintCard',
    initialState: {
        goalsInCard: goalArray,
        currentSprint: true,
    },
    reducers: {
        addToCard: (state, action) => {
            return {
                ...state,
                goalsInCard: [...state.goalsInCard, {
                    ...action.payload
                }]
            }
        }, 
        removeFromCard: (state, action) => {
            return {
                ...state,
                goalsInCard: state.goalsInCard.filter(goal => goal.name !== action.payload.name)
            }
        }
    }
})

export const selectSprintCard = (state) => state.sprintCard;
export const selectGoalsInCard = (state) => state.sprintCard.goalsInCard;

export const { addToCard, removeFromCard } = sprintCardSlice.actions;
export default sprintCardSlice.reducer;