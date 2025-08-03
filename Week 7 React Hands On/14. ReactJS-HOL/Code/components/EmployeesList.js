// EmployeesList.js
import React from 'react';
import EmployeeCard from './EmployeeCard';

const employeeData = [
  { id: 1, name: "John", role: "Developer" },
  { id: 2, name: "Jane", role: "Designer" },
  { id: 3, name: "Alex", role: "Tester" }
];

function EmployeesList() {
  return (
    <div>
      <h2>Employees List</h2>
      {employeeData.map(emp => (
        <EmployeeCard key={emp.id} name={emp.name} role={emp.role} />
      ))}
    </div>
  );
}

export default EmployeesList;
