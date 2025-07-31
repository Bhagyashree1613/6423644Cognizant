function Scorebelow70({ players }) {
  const filtered = players.filter(player => {
    // Extract the score number from the string
    const score = parseInt(player.split(' ').pop());
    return score < 70;
  });

  return (
    <ul>
      {filtered.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  );
}

export default Scorebelow70;
