import React from 'react';
import ListofPlayers from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import OddPlayers from './OddPlayers';
import EvenPlayers from './EvenPlayers';
import ListofIndianPlayers from './ListofIndianPlayers';

function App() {
  const flag = false;

  const players = [
    "Mr. Jack 50", "Mr. Michael 70", "Mr. John 40", "Mr. Ann 61", "Mr. Elisabeth 61",
    "Mr. Sachin 95", "Mr. Dhoni 100", "Mr. Virat 84", "Mr. Jadeja 64", "Mr. Raina 75", "Mr. Rohit 80"
  ];

  const IndianTeam = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvaraj5", "Raina6"];
  const T20 = ["Mr. First Player", "Mr. Second Player", "Mr. Third Player"];
  const Ranji = ["Mr. Fourth Player", "Mr. Fifth Player", "Mr. Sixth Player"];
  const IndianPlayers = [...T20, ...Ranji]; // merged array

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>
        <h1>Odd Players</h1>
        <OddPlayers IndianTeam={IndianTeam} />
        <hr />
        <h1>Even Players</h1>
        <EvenPlayers IndianTeam={IndianTeam} />
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers IndianPlayers={IndianPlayers} />
      </div>
    );
  }
}

export default App;
