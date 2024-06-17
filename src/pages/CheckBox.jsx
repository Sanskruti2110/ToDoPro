// src/components/Checkbox.jsx
// import React from 'react';
import PropTypes from 'prop-types';
import './styles/checkbox.css';

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        className="check"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="label">
        <svg width="45" height="45" viewBox="0 0 95 95">
          <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
          <g transform="translate(0,-952.36222)">
            <path
              d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
              stroke="black"
              strokeWidth="3"
              fill="none"
              className="path1"
            ></path>
          </g>
        </svg>
        <span>{label}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
