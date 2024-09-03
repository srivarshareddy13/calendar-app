// src/components/CalendarView.js
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import './index.css'

class CalendarView extends Component {
  state = {
    date: new Date(),
  };

  onDateChange = (date) => {
    this.setState({ date });
  };


  formatDateLocal = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  render() {
    const { date } = this.state;
    const { events } = this.props;

    const selectedDate = this.formatDateLocal(date);

    const eventsOnSelectedDate = events.filter(
      (event) => event.date === selectedDate
    );

    return (
      <div className='container'>
        <h2>Calendar</h2>
        <Calendar onChange={this.onDateChange} value={date} />
        <div>
          <h3>Events on {selectedDate}:</h3>
          {eventsOnSelectedDate.length > 0 ? (
            <ul>
              {eventsOnSelectedDate.map((event) => (
                <li key={event.id}>
                  <Link to={`/event/${event.id}`}>{event.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No events for this day.</p>
          )}
        </div>
        <Link to="/event/new">Add New Event</Link>
      </div>
    );
  }
}

export default CalendarView;
