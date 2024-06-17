import './styles/habitTracker.css';
import { useState } from 'react';

const HabitTracker = () => {
  const [habits, setHabits] = useState([{ name: '', checks: new Array(30).fill(false) }]);

  const handleHabitNameChange = (index, event) => {
    const newHabits = [...habits];
    newHabits[index].name = event.target.value;
    setHabits(newHabits);
  };

  const handleCheckboxChange = (habitIndex, checkboxIndex) => {
    const newHabits = [...habits];
    newHabits[habitIndex].checks[checkboxIndex] = !newHabits[habitIndex].checks[checkboxIndex];
    setHabits(newHabits);
  };

  const addHabit = () => {
    setHabits([...habits, { name: '', checks: new Array(30).fill(false) }]);
  };

  return (
    <div className="habit-tracker-container">
      <header className="habit-tracker-header">
        <h1>Habit Tracker</h1>
      </header>
      <div className="grid-container">
        {habits.map((habit, habitIndex) => (
          <div className="habit-row" key={habitIndex}>
            <div className="habit-name">
              <input
                type="text"
                value={habit.name}
                onChange={(event) => handleHabitNameChange(habitIndex, event)}
                placeholder="Enter habit name"
              />
            </div>
            <div className="habit-checks">
              {habit.checks.map((checked, checkboxIndex) => (
                <div key={checkboxIndex} className="checkbox">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleCheckboxChange(habitIndex, checkboxIndex)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={addHabit} className="add-habit-button">Add Habit</button>
    </div>
  );
};

export default HabitTracker;
