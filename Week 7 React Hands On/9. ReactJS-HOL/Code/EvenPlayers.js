import React from 'react';

function EvenPlayers({ IndianTeam }) {
  const evenPlayers = IndianTeam.filter((_, index) => index % 2 === 1); // 1,3,5

  return (
    <ul>
      {evenPlayers.map((player, index) => (
        <li key={index}>
          {index === 0 ? 'Second' : index === 1 ? 'Fourth' : 'Sixth'} : {player}
        </li>
      ))}
    </ul>
  );
}

export default EvenPlayers;
