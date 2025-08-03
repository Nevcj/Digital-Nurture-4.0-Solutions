import React from 'react';

function EvenPlayers({ players }) {
  const [, second, , fourth, , sixth] = players;
  return (
    <ul>
      <li>Second: {second}</li>
      <li>Fourth: {fourth}</li>
      <li>Sixth: {sixth}</li>
    </ul>
  );
}

export default EvenPlayers;
