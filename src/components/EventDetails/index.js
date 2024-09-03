import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './index.css'; 

const EventDetails = ({ events, updateEvent }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id.toString() === id);

  if (!event) {
    return <p>Event not found</p>;
  }

  const handleEdit = () => {
    
    navigate(`/event/edit/${event.id}`, { state: { event } });
  };

  return (
    <div className="container">
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <button onClick={handleEdit}>Edit Event</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default EventDetails;

