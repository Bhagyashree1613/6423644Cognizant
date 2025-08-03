// src/ComplaintRegister.js
import React, { useState } from 'react';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const referenceNumber = Math.floor(100000 + Math.random() * 900000);
    alert(`Complaint submitted successfully!\nReference No: ${referenceNumber}`);
    // Clear fields after submit
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <div style={{ margin: "40px", fontFamily: "Arial" }}>
      <h2>Complaint Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name:</label><br />
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
            style={{ width: "300px", padding: "8px", marginBottom: "15px" }}
          />
        </div>
        <div>
          <label>Complaint:</label><br />
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
            rows="5"
            cols="50"
            style={{ padding: "8px", marginBottom: "15px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "green", color: "white", border: "none" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
