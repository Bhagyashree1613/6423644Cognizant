// EmployeeCard.js
import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

function EmployeeCard({ name, role }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <button className={theme}>Message</button>
    </div>
  );
}

export default EmployeeCard;
