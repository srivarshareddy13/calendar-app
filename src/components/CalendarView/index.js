import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';

class CalendarView extends Component {
  state = {
    date: new Date(),
    events: [
      { id: 1, title: 'Meeting', date: '2024-09-03', description: 'Discuss project' },
      { id: 2, title: 'Birthday Party', date: '2024-09-05', description: 'Celebrate birthday' },
    ]
  };

  onDateChange = date => this.setState({ date });

  render() {
    const { date, events } = this.state;
    const selectedDate = date.toISOString().split('T')[0];

    const eventsOnSelectedDate = events.filter(event => event.date === selectedDate);

    return (
      <div>
        <h2>Calendar</h2>
        <Calendar onChange={this.onDateChange} value={this.state.date} />
        <div>
          <h3>Events on {selectedDate}:</h3>
          {eventsOnSelectedDate.length > 0 ? (
            <ul>
              {eventsOnSelectedDate.map(event => (
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
