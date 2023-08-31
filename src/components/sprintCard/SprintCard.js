import React from 'react';
import { GoalCard } from '../goalCard/goalCard';
import { goalArray } from '../../utils/data';
import './sprintCard.css';

export const SprintCard = (props) => {


    return (
        <div className='sprintCardContainer'>
            <h2>Current Sprint</h2>
            {goalArray.map((goal) => {
                return (
                    <GoalCard goal = {goal} />
                )
            })}
            <button class="button-10" role="button" aria-label='Add New Goal'>Add New Goal</button>

        </div>
    )
}