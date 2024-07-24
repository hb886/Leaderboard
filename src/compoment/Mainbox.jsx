import React, { useState } from "react";
import Image from "../assest/images.png";
import "./Mainbox.css";

const Mainbox = () => {
  const divStyle = {
    backgroundImage: `url(${Image})`,
    backgroundColor: "red",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "75vh",
    width: "100%",
  };

  const [playerInfo, setPlayerInfo] = useState([
    { name: "Rahul", time: "12:00:00" },
    { name: "Ajay", time: "14:30:45" },
    { name: "Prakash", time: "09:00:00" },
    { name: "Rahul", time: "12:00:00" },
    { name: "Ajay", time: "14:30:45" },
    { name: "Prakash", time: "09:00:00" },
    { name: "Prakash", time: "09:00:00" },
    { name: "Rahul", time: "12:00:00" },
    { name: "Ajay", time: "14:30:45" },
    { name: "Prakash", time: "09:00:00" },
    { name: "Rahul", time: "12:00:00" },
    { name: "Ajay", time: "14:30:45" },
    { name: "Prakash", time: "09:00:00" },
  ]);

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [newEntry, setNewEntry] = useState(null);

  const parseTime = (timeStr) => {
    const [hours, minutes, seconds] = timeStr.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const sortedEntries = [...playerInfo].sort(
    (a, b) => parseTime(a.time) - parseTime(b.time)
  );

  const handleAddEntry = (e) => {
    e.preventDefault();
    const newEntry = { name, time };
    setPlayerInfo([...playerInfo, newEntry]);
    setName("");
    setTime("");
    setNewEntry(newEntry);
  };

  const getPriceMoney = (index) => {
    if (index === 1) return '₹ 50,000';
    else if (index === 2) return '₹ 30,000';
    else if (index === 3) return '₹ 20,000';
  };

  return (
    <div className="mainbox" style={divStyle}>
      <form onSubmit={handleAddEntry} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter player name"
          required
          className="inputName"
          style={{
            padding: "0.5%",
            borderRadius: "4px",
            border: "none",
            outline: "none",
          }}
        />
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter time (HH:MM:SS)"
          required
          className="inputTime"
          style={{
            marginLeft: "4px",
            padding: "0.5%",
            borderRadius: "4px",
            border: "none",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "4px",
            padding: "0.5%",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Add Entry
        </button>
      </form>

      <ul className="list">
        <li>
          <div className="flex-container">
            <div className="flex-item" style={{ fontWeight: '500' }}>🏆 Rank</div>
            <div className="flex-item" style={{ fontWeight: '500' }}>🏎️ Name</div>
            <div className="flex-item" style={{ fontWeight: '500' }}>💸 Price</div>
            <div className="flex-item" style={{ fontWeight: '500' }}>🕐 Time</div>
          </div>
        </li>
      </ul>

      <ul className="list">
        {sortedEntries.slice(0, 10).map((entry, index) => (
          <li key={index} className={entry === newEntry ? "new-entry" : "entry"}>
            <div className="flex-container">
              <div className="flex-item">{(index + 1).toString().padStart(2, '0')}</div>
              <div className="flex-item">{entry.name}</div>
              <div className="flex-item">{getPriceMoney(index + 1)}</div>
              <div className="flex-item">{entry.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mainbox;
