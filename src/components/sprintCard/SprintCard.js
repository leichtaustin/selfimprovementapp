import React from 'react';
import { GoalCard } from '../goalCard/goalCard';
import { goalArray } from '../../utils/data';

export const SprintCard = (props) => {


    return (
        <div className='sprintCardContainer'>
            {goalArray.map((goal) => {
                return (
                    <GoalCard goal = {goal} />
                )
            })}

        </div>
    )
}