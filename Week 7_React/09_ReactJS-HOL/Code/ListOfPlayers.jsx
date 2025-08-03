import React from 'react';

function ListOfPlayers({ players }) {
  return (
    <ul>
      {players.map((player, idx) => (
        <li key={idx}>
          {player.name} - {player.score}
        </li>
      ))}
    </ul>
  );
}

export default ListOfPlayers;