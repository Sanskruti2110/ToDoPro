import  { useState } from 'react';
import './styles/brainDumps.css';

const BrainDumps = () => {
  const sections = [
    'Random Thought',
    'New Idea',
    'To Call',
    'To Text',
    'To Email',
  ];

  const [entries, setEntries] = useState({
    'Random Thought': [],
    'New Idea': [],
    'To Call': [],
    'To Text': [],
    'To Email': [],
  });

  const [newEntry, setNewEntry] = useState({
    'Random Thought': '',
    'New Idea': '',
    'To Call': '',
    'To Text': '',
    'To Email': '',
  });

  const handleNewEntryChange = (section, event) => {
    setNewEntry({ ...newEntry, [section]: event.target.value });
  };

  const handleAddEntry = (section) => {
    if (newEntry[section].trim()) {
      setEntries({
        ...entries,
        [section]: [...entries[section], newEntry[section]],
      });
      setNewEntry({ ...newEntry, [section]: '' });
    }
  };

  return (
    <div className="brain-dumps-container">
      <header className="brain-dumps-header">
        <h1>Brain Dumps</h1>
      </header>
      <div className="brain-dumps-sections">
        {sections.map((section) => (
          <div className="brain-dumps-section" key={section}>
            <h2>{section}</h2>
            <div className="entry-input">
              <input
                type="text"
                value={newEntry[section]}
                onChange={(event) => handleNewEntryChange(section, event)}
                placeholder={`Add ${section.toLowerCase()}`}
              />
              <button onClick={() => handleAddEntry(section)}>Add</button>
            </div>
            <ul>
              {entries[section].map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrainDumps;
