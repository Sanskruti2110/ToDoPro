// src/App.jsx
// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Todo from './pages/ToDoList';
import HabitTracker from './pages/HabitTracker';
import BrainDump from './pages/BrainDump';
import Goals from './pages/Goals';
import MoodTracker from './pages/MoodTracker';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/habit-tracker" element={<HabitTracker />} />
        <Route path="/brain-dump" element={<BrainDump />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
      </Routes>
    </div>
  );
};

export default App;

