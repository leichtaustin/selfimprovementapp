import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoalCard } from '../goalCard/goalCard';
import { selectGoalsInCard } from './sprintCardSlice';
import { AddNewGoal } from './addNewGoal';
import './sprintCard.css';

export const SprintCard = (props) => {

    const goalsArr = useSelector(selectGoalsInCard);

    const handleAddGoal = (e) => {
        e.preventDefault();
        document.getElementById('addNewGoalContainer').style.display = 'block';
    }

    return (
        <div className='sprintCardContainer'>
            <h2>Current Sprint</h2>
            {goalsArr.map((goal) => {
                return (
                    <GoalCard goal = {goal} />
                )
            })}
            <button 
                className="button-10" 
                aria-label='Add New Goal' 
                onClick={handleAddGoal}
                >Add New Goal</button>
            <AddNewGoal />

        </div>
    )
}