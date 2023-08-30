import React from 'react';
//import { sampleGoal } from "../../utils/data";

export const GoalCard = (props) => {


    return (
        <div className='goalCardContainer'>
            <h3>Goal Name: {props.goal.name}</h3>
            <p>Target Value: {props.goal.targetValue}</p>
            <p>Current Value: {props.goal.currentValue}</p>
        </div>
    )
}