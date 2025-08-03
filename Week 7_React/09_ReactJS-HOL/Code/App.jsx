import React from 'react';
import ListOfPlayers from './components/ListOfPlayers';
import IndianPlayers from './components/IndianPlayers';
import OddPlayers from './components/OddPlayers';
import EvenPlayers from './components/EvenPlayers';
import ScoreBelow70 from './components/ScoreBelow70';

function App() {
  const flag = true;

  const players = [
    { name: "Mr. Jack", score: 50 },
    { name: "Mr. Michael", score: 70 },
    { name: "Mr. Ann", score: 61 },
    { name: "Mr. Elisabeth", score: 61 },
    { name: "Mr. Sachin", score: 95 },
    { name: "Mr. Kohli", score: 100 },
    { name: "Mr. Virat", score: 85 },
    { name: "Mr. Jadeja", score: 64 },
    { name: "Mr. Raina", score: 75 },
    { name: "Mr. Rohit", score: 80 },
    { name: "Mr. John", score: 69 },
  ];

  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const indianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const oddTeam = ['Sachin1', 'Dhoni2', 'Rohit4', 'Yuvaraj5', 'Raina6'];

  return (
    <div>
      {flag ? (
        <>
          <h1>List of Players</h1>
          <ListOfPlayers players={players} />
          <h2>List of Players having Scores Less than 70</h2>
          <ScoreBelow70 players={players} />
        </>
      ) : (
        <>
          <h1>Indian Team</h1>
          <h2>Odd Players</h2>
          <OddPlayers players={oddTeam} />
          <h2>Even Players</h2>
          <EvenPlayers players={oddTeam} />
          <h2>List of Indian Players</h2>
          <IndianPlayers players={indianPlayers} />
        </>
      )}
    </div>
  );
}

export default App;
