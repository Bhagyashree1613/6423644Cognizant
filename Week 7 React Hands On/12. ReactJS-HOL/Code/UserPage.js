// src/UserPage.js
import React from 'react';

function UserPage() {
  return (
    <div style={{ margin: "30px" }}>
      <h2>Welcome, Member!</h2>
      <p>Book your tickets now:</p>
      <button>Book Bangalore → Delhi</button><br /><br />
      <button>Book Mumbai → Hyderabad</button><br /><br />
      <button>Book Kolkata → Chennai</button>
    </div>
  );
}

export default UserPage;
