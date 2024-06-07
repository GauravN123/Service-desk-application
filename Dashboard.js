// src/pages/Dashboard.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await axios.get("http://localhost:5000/tickets");
      setTickets(response.data);
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/raise-ticket">Raise New Ticket</Link>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <Link to={`/ticket/${ticket.id}`}>{ticket.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
