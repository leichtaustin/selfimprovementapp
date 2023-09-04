import React from 'react';
import './addNewGoal.css'
import { useDispatch } from 'react-redux';
import { addToCard } from './sprintCardSlice';

export const AddNewGoal = () => {

    const dispatch = useDispatch();

    // function displayQuestion() {
    //     const answer = document.getElementById('goalType').value;
    //     if (answer === 'numerical') {
    //         document.getElementById(answer + 'Question').style.display = 'block';
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newGoal = {
            name: document.getElementById('goalNameInput').value,
            targetValue: document.getElementById('targetValueInput').value,
            currentValue: document.getElementById('currentValueInput').value
        }   

        dispatch(addToCard(newGoal));
        document.getElementById('addNewGoalContainer').style.display = 'none';
    }

    return (
        <div aria-label='Add New Goal' className='addNewGoalContainer' id='addNewGoalContainer'>
            <h1>New Goal</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='goalNameInput'>Goal Name: </label>
                <input 
                    type='text' 
                    id='goalNameInput' 
                    name='goalNameInput'
                    maxLength={50}
                    pattern="[a-zA-Z0-9 .!?,]+" 
                    defaultValue='Goal Name'
                    required
                    ></input>
                <br/>
                {/* <label htmlFor='goalType'>Goal Type:</label> */}
                {/* <select id='goalType' name='goalType' onChange={displayQuestion()}>
                    <option value={""}>Select Type</option>
                    <option value={'numerical'} selected>Numerical value</option>
                    <option value={'task'}>Task</option>
                </select> */}
                <br/>
                <div id='numericalQuestion'>
                    <label htmlFor='targetValueInput'>Target Value: </label>
                    <input type='number' id='targetValueInput' required defaultValue={1}></input>
                </div>                
                <br/>
                <label htmlFor='currentValueInput'>Current Value: </label>
                <input type='number' id='currentValueInput' required defaultValue={0}></input>
                <br/>
                <br/>
                <button type='submit'>
                    Add Goal
                </button>
            </form>
        </div>
    )
}