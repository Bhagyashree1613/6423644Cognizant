import React from 'react';

function OddPlayers({ IndianTeam }) {
  const oddPlayers = IndianTeam.filter((_, index) => index % 2 === 0); // 0,2,4

  return (
    <ul>
      {oddPlayers.map((player, index) => (
        <li key={index}>
          {index === 0 ? 'First' : index === 1 ? 'Third' : 'Fifth'} : {player}
        </li>
      ))}
    </ul>
  );
}

export default OddPlayers;
