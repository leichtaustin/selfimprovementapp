import React from 'react';
import './goalCard.css';
import { useDispatch } from 'react-redux';
import { removeFromCard } from '../sprintCard/sprintCardSlice';
//import { sampleGoal } from "../../utils/data";

export const GoalCard = (props) => {

    const dispatch = useDispatch();

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(removeFromCard(props.goal));
    }

    return (
        <div className='goalCardContainer' aria-label='Goal Card'>
            <h3 className='dataContainer' id='goalName' aria-label='Goal Name'>{props.goal.name}</h3>
            <p className='dataContainer' id='targetValue' aria-label='Target Value'>Target Value: {props.goal.targetValue}</p>
            <p className='dataContainer' id='currentValue' aria-label='Current Value'>Current Value: {props.goal.currentValue}</p>
            <button onClick={handleRemove}>-</button>
        </div>
    )
}