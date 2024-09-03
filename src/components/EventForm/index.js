import React, { Component } from 'react';

class EventForm extends Component {
  state = {
    title: '',
    date: '',
    description: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, date, description } = this.state;
    // Ideally, you'd want to save this data in a database or a global state
    alert(`Event Created!\nTitle: ${title}\nDate: ${date}\nDescription: ${description}`);
    this.setState({ title: '', date: '', description: '' });
  };

  render() {
    return (
      <div>
        <h2>Add/Edit Event</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Date: </label>
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Description: </label>
            <textarea name="description" value={this.state.description} onChange={this.handleChange} required />
          </div>
          <button type="submit">Save Event</button>
        </form>
      </div>
    );
  }
}

export default EventForm;
