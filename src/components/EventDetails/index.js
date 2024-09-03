import React, { Component } from 'react';

class EventDetails extends Component {
  state = {
    event: null,
  };

  componentDidMount() {
    const eventId = this.props.match.params.id;
    const events = [
      { id: 1, title: 'Meeting', date: '2024-09-03', description: 'Discuss project' },
      { id: 2, title: 'Birthday Party', date: '2024-09-05', description: 'Celebrate birthday' },
    ];

    const event = events.find(e => e.id.toString() === eventId);
    this.setState({ event });
  }

  render() {
    const { event } = this.state;
    if (!event) {
      return <p>Event not found</p>;
    }

    return (
      <div>
        <h2>{event.title}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Description:</strong> {event.description}</p>
      </div>
    );
  }
}

export default EventDetails;
