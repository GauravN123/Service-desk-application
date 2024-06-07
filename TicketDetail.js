// src/pages/TicketDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TicketDetail = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // Fetch ticket details from the API
    // setTicket(response.data);
  }, [id]);

  return (
    <div>
      {ticket ? (
        <>
          <h2>{ticket.title}</h2>
          <p>{ticket.description}</p>
          <p>Status: {ticket.status}</p>
          {/* Add form for updating ticket details or status if needed */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TicketDetail;
