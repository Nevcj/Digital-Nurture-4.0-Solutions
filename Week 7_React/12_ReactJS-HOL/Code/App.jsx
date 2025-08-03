import React, { useState } from 'react';

function UserGreeting() {
  return <h2>Welcome back! You can now book your tickets.</h2>;
}

function GuestGreeting() {
  return <h2>Please sign up or login to book your flight tickets.</h2>;
}

function LoginButton({ onClick }) {
  return <button onClick={onClick}>Login</button>;
}

function LogoutButton({ onClick }) {
  return <button onClick={onClick}>Logout</button>;
}

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function FlightDetails() {
  return (
    <div>
      <h3>Available Flights</h3>
      <ul>
        <li>Chennai to Delhi - 7:00 AM</li>
        <li>Chennai to Mumbai - 10:30 AM</li>
        <li>Chennai to Bengaluru - 1:00 PM</li>
      </ul>
    </div>
  );
}

function BookTicket({ isLoggedIn }) {
  if (!isLoggedIn) return null;
  return <button>Book Ticket</button>;
}


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={() => setIsLoggedIn(false)} />;
  } else {
    button = <LoginButton onClick={() => setIsLoggedIn(true)} />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ticket Booking App</h1>
      {button}
      <Greeting isLoggedIn={isLoggedIn} />
      <FlightDetails />
      <BookTicket isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
