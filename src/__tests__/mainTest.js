import React from 'react';
import { render, screen } from '@testing-library/react';
// import { renderWithProviders } from '../test-utils';
import { SprintCard } from '../components/sprintCard/SprintCard';
import { GoalCard } from '../components/goalCard/goalCard';
import App from '../App';

test('displays App', () => {
    render(<App />);

    expect(screen.getByText(/Accountability/)).toBeInTheDocument();
})

test('displays goal card with sample data', () => {
    const goal = {name: 'Run 5 miles', targetValue: 5, currentValue: 0};
    
    render(<GoalCard goal = {goal}/>);

    expect(screen.getByText(/Goal Name/)).toBeInTheDocument();

})
