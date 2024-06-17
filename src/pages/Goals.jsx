import  { useState } from 'react';
import './styles/goals.css';

const Goals = () => {
  const [monthlyGoals, setMonthlyGoals] = useState([]);
  const [yearlyGoals, setYearlyGoals] = useState([]);
  const [newMonthlyGoal, setNewMonthlyGoal] = useState('');
  const [newYearlyGoal, setNewYearlyGoal] = useState('');

  const handleAddMonthlyGoal = () => {
    if (newMonthlyGoal.trim()) {
      setMonthlyGoals([...monthlyGoals, { text: newMonthlyGoal, completed: false }]);
      setNewMonthlyGoal('');
    }
  };

  const handleAddYearlyGoal = () => {
    if (newYearlyGoal.trim()) {
      setYearlyGoals([...yearlyGoals, { text: newYearlyGoal, completed: false }]);
      setNewYearlyGoal('');
    }
  };

  const handleToggleMonthlyGoal = (index) => {
    const updatedGoals = [...monthlyGoals];
    updatedGoals[index].completed = !updatedGoals[index].completed;
    setMonthlyGoals(updatedGoals);
  };

  const handleToggleYearlyGoal = (index) => {
    const updatedGoals = [...yearlyGoals];
    updatedGoals[index].completed = !updatedGoals[index].completed;
    setYearlyGoals(updatedGoals);
  };

  return (
    <div className="goals-container">
      <h1>Goals</h1>
      <div className="goals-section">
        <h2>Monthly Goals</h2>
        <input
          type="text"
          value={newMonthlyGoal}
          onChange={(e) => setNewMonthlyGoal(e.target.value)}
          placeholder="Enter your monthly goal"
        />
        <button onClick={handleAddMonthlyGoal}>Add</button>
        <ul>
          {monthlyGoals.map((goal, index) => (
            <li
              key={index}
              onClick={() => handleToggleMonthlyGoal(index)}
              style={{
                textDecoration: goal.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {goal.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="goals-section">
        <h2>Yearly Goals</h2>
        <input
          type="text"
          value={newYearlyGoal}
          onChange={(e) => setNewYearlyGoal(e.target.value)}
          placeholder="Enter your yearly goal"
        />
        <button onClick={handleAddYearlyGoal}>Add</button>
        <ul>
          {yearlyGoals.map((goal, index) => (
            <li
              key={index}
              onClick={() => handleToggleYearlyGoal(index)}
              style={{
                textDecoration: goal.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {goal.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Goals;
