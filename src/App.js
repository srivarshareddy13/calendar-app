
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarView from './components/CalendarView';
import EventForm from './components/EventForm';
import EventDetails from './components/EventDetails';
import './App.css';

function App() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Meeting', date: '2024-09-03', description: 'Discuss project' },
    { id: 2, title: 'Birthday Party', date: '2024-09-05', description: 'Celebrate birthday' },
  ]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(events.map(event => (event.id === updatedEvent.id ? updatedEvent : event)));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CalendarView events={events} />} />
          <Route path="/event/new" element={<EventForm addEvent={addEvent} />} />
          <Route path="/event/edit/:id" element={<EventForm addEvent={addEvent} updateEvent={updateEvent} />} />
          <Route path="/event/:id" element={<EventDetails events={events} updateEvent={updateEvent} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

