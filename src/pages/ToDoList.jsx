import './styles/todo.css';
import Checkbox from './CheckBox';
import { useState } from 'react';

const date = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

const Todo = () => {
  const [checkedStates, setCheckedStates] = useState(new Array(8).fill(false));
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [priorities, setPriorities] = useState([]);
  const [newPriority, setNewPriority] = useState('');

  const handleCheckboxChange = (index) => {
    const updatedCheckedStates = [...checkedStates];
    updatedCheckedStates[index] = !updatedCheckedStates[index];
    setCheckedStates(updatedCheckedStates);
  };

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleNewPriorityChange = (event) => {
    setNewPriority(event.target.value);
  };

  const handleAddPriority = () => {
    if (newPriority.trim()) {
      setPriorities([...priorities, { text: newPriority, completed: false }]);
      setNewPriority('');
    }
  };

  const handleTogglePriority = (index) => {
    const updatedPriorities = [...priorities];
    updatedPriorities[index].completed = !updatedPriorities[index].completed;
    setPriorities(updatedPriorities);
  };

  return (
    <div className="todo-container">
      <div className="parent">
        <div className="div1">
          <h1 className="todo-title">To-Do List</h1>
        </div>
        <div className="div2">
          <h2>Date</h2>
          <div className="date">
            <h3>{`${date}-${month}-${year}`}</h3>
          </div>
        </div>
        <div className="div3">
          <h2>My Health Checklist</h2>
          <h3>Water</h3>
          <div className="checkbox flex">
            {checkedStates.slice(0, 4).map((checked, index) => (
              <Checkbox
                key={index}
                id={`check1-61-${index}`}
                label=""
                checked={checked}
                onChange={() => handleCheckboxChange(index)}
              />
            ))}
          </div>
          <div className="checkbox flex">
            {checkedStates.slice(4).map((checked, index) => (
              <Checkbox
                key={index + 4}
                id={`check1-61-${index + 4}`}
                label=""
                checked={checked}
                onChange={() => handleCheckboxChange(index + 4)}
              />
            ))}
          </div>
        </div>
        <div className="div4">
          <h2 className="py-3 flex items-center justify-center">To-Do list</h2>
          <input
            type="text"
            value={newTodo}
            onChange={handleNewTodoChange}
            placeholder="Enter your task"
          />
          <button onClick={handleAddTodo}>Add</button>
          <ul>
            {todos.map((todo, index) => (
              <li
                key={index}
                onClick={() => handleToggleTodo(index)}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
              >
               # {todo.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="div5">
          <h2 className="py-3 flex items-center justify-center">Priority List</h2>
          <input
            type="text"
            value={newPriority}
            onChange={handleNewPriorityChange}
            placeholder="Enter your priority"
            className="mx-8"
          />
          <button onClick={handleAddPriority} className='mx-5'>Add</button>
          <ul>
            {priorities.map((priority, index) => (
              <li
                key={index}
                onClick={() => handleTogglePriority(index)}
                style={{
                  textDecoration: priority.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
              >
               # {priority.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="div6"></div>
      </div>
    </div>
  );
};

export default Todo;
