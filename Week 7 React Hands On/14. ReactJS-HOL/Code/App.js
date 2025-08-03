import React, { useState } from 'react';
import EmployeesList from './components/EmployeesList';
import ThemeContext from './ThemeContext';
import './App.css'; // Optional: for custom styling

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <h1>Employee Management</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
