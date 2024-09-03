
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalendarView from './components/CalendarView';
import EventForm from './components/EventForm';
import EventDetails from './components/EventDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<CalendarView />} />
            <Route path="/event/new" element={<EventForm />} />
            <Route path="/event/:id" element={<EventDetails />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
