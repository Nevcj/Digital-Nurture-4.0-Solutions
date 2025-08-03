import React from 'react';

function ScoreBelow70({ players }) {
  const filtered = players.filter(player => player.score < 70);
  return (
    <ul>
      {filtered.map((player, idx) => (
        <li key={idx}>
          {player.name} - {player.score}
        </li>
      ))}
    </ul>
  );
}

export default ScoreBelow70;
