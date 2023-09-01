import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoalCard } from '../goalCard/goalCard';
import { selectGoalsInCard } from './sprintCardSlice';
import { AddNewGoal } from './addNewGoal';
import './sprintCard.css';

export const SprintCard = (props) => {

    const goalsArr = useSelector(selectGoalsInCard);


    return (
        <div className='sprintCardContainer'>
            <h2>Current Sprint</h2>
            {goalsArr.map((goal) => {
                return (
                    <GoalCard goal = {goal} />
                )
            })}
            <button class="button-10" aria-label='Add New Goal'>Add New Goal</button>
            <AddNewGoal/>

        </div>
    )
}