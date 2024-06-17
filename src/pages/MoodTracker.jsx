import  { useState } from 'react';
import './styles/moodTracker.css';

const months = [
  { name: 'January', days: 31 },
  { name: 'February', days: 28 },
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 },
];

const emojis = ["😭", "😢", "😞", "😐", "😊", "😁", "😍"];

const MoodTracker = () => {
  const [moodData, setMoodData] = useState(
    Array(12).fill().map(() => Array(31).fill(null))
  );

  const handleMoodChange = (monthIndex, dayIndex, emoji) => {
    const updatedMoodData = [...moodData];
    updatedMoodData[monthIndex][dayIndex] = emoji;
    setMoodData(updatedMoodData);
  };

  return (
    <div className="mood-tracker-container">
      <h1>Mood Tracker</h1>
      {months.map((month, monthIndex) => (
        <div key={monthIndex} className="month-section">
          <h2>{month.name}</h2>
          <div className="days-grid">
            {Array.from({ length: month.days }, (_, dayIndex) => (
              <div key={dayIndex} className="day-cell">
                <span>{dayIndex + 1}</span>
                <div className="emoji-selector">
                  {emojis.map((emoji, emojiIndex) => (
                    <span
                      key={emojiIndex}
                      className="emoji"
                      onClick={() => handleMoodChange(monthIndex, dayIndex, emoji)}
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
                <div className="selected-emoji">
                  {moodData[monthIndex][dayIndex]}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodTracker;
