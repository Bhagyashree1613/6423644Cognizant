import React from 'react';
import './App.css';
import office1 from './assets/office1.png';
import office2 from './assets/office2.png';
import office3 from './assets/office3.png';
import office4 from './assets/office4.png';

function App() {
  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai", image: office1 },
    { Name: "WeWork", Rent: 70000, Address: "Bangalore", image: office2 },
    { Name: "CoworkHub", Rent: 55000, Address: "Hyderabad", image: office3 },
    { Name: "OfficePro", Rent: 65000, Address: "Pune", image: office4 }
  ];

  return (
    <div className="App">
      <h1>Office Space , at Affordable Range</h1>
      {officeList.map((item, index) => {
        const colorClass = item.Rent <= 60000 ? 'textRed' : 'textGreen';

        return (
          <div key={index}>
            <img src={item.image} width="30%" height="30%" alt="Office Space" />
            <h2>Name: {item.Name}</h2>
            <h3 className={colorClass}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
