import React from "react";


const textRed = { color: "red" };
const textGreen = { color: "green" };

function App() {
  const element = "Office Space";
  const imageSrc = "";

  const officeList = [
    { name: "DBS", rent: 50000, address: "Chennai" },
    { name: "Regus", rent: 75000, address: "Bangalore" },
    { name: "SmartWorks", rent: 60000, address: "Hyderabad" },
    { name: "WeWork", rent: 80000, address: "Mumbai" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>{element}, at Affordable Range</h1>
      <img src={imageSrc} alt="Office Space" width="40%" height="30%" />

      {officeList.map((office, index) => (
        <div key={index} style={{ border: "1px solid #ccc", marginTop: "20px", padding: "10px" }}>
          <h2>Name: {office.name}</h2>
          <h3 style={office.rent <= 60000 ? textRed : textGreen}>
            Rent Rs. {office.rent}
          </h3>
          <h3>Address: {office.address}</h3>
        </div>
      ))}
    </div>
  );

}

export default App;
