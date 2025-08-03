import React from 'react';

function IndianPlayers({ players }) {
  return (
    <ul>
      {players.map((player, idx) => (
        <li key={idx}>Mr. {player}</li>
      ))}
    </ul>
  );
}

export default IndianPlayers;
