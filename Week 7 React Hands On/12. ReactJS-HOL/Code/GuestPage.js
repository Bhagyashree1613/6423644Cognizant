// src/GuestPage.js
import React from 'react';

function GuestPage() {
  return (
    <div style={{ margin: "30px" }}>
      <h2>Welcome, Guest!</h2>
      <p>Browse our latest flight offers below:</p>
      <ul>
        <li>Bangalore → Delhi - ₹4500</li>
        <li>Mumbai → Hyderabad - ₹3200</li>
        <li>Kolkata → Chennai - ₹3800</li>
      </ul>
    </div>
  );
}

export default GuestPage;

