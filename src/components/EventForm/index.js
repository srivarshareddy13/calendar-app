import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './index.css'; 

const EventForm = ({ addEvent, updateEvent }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const eventToEdit = location.state?.event;

  const [title, setTitle] = useState(eventToEdit ? eventToEdit.title : '');
  const [date, setDate] = useState(eventToEdit ? eventToEdit.date : '');
  const [description, setDescription] = useState(eventToEdit ? eventToEdit.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (eventToEdit) {
      
      const updatedEvent = {
        ...eventToEdit,
        title,
        date,
        description,
      };
      updateEvent(updatedEvent);
    } else {
      
      const newEvent = {
        id: Date.now(),
        title,
        date,
        description,
      };
      addEvent(newEvent);
    }

    navigate('/');
  };

  return (
    <div className="container">
      <h2>{eventToEdit ? 'Edit Event' : 'Add New Event'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date: </label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">{eventToEdit ? 'Update Event' : 'Save Event'}</button>
      </form>
    </div>
  );
};

export default EventForm;
