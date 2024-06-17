import {Link} from "react-router-dom";
import cover from "../../public/cover.png";
// import Home from "../pages/Home"
// import { useState } from "react";
import "./styles/navbar.css";
// import ToDoList from "../pages/ToDoList";
// import { useState } from "react";

const Navbar = () => { 
    // const [clickToDo, setClickToDO]= useState("To-Do List")
  return (
    <div>
       <nav className=" p-4 z-10">
        <ul className="flex space-x-4">
            <div className="right-logo">
            <li>
                <img src={cover} alt="logo-image" height={50} width={100} id="logo-img" />
            </li>
            </div>
            <div className="left-navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/todo" >To-Do List </Link>
            </li>
            <li>
                <Link to="/habit-tracker">Habit Tracker</Link>
            </li>
            <li>
                <Link to="/brain-dump">Brain Dumps</Link>
            </li>
            <li>
                <Link to="/goals">Goals</Link>
            </li>
            <li>
                <Link to="/mood-tracker">Mood Tracker</Link>
            </li>
            </div>
           
        </ul>
       </nav>
      
    </div>
  )
}

export default Navbar;
// src/pages/Home.jsx

  