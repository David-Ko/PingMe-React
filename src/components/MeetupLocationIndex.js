import React, { Component } from "react";
import { MeetupLocation } from "../requests";

class MeetupLocationIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetups: null
    };
  }

  componentDidMount() {
    MeetupLocation.all().then(meetups => {
      this.setState({ meetups: meetups });
    });
  }

  render() {
    if (this.state.meetups === null) {
      return <div className="container mt-3">There is no meetup at all!</div>;
    }

    return (
      <div className="container-fluid mt-5">
        <div id="map-search-meetups" className="container-fluid">
          <p>map placeholder</p>
        </div>
        <div className="container-fluid">
          {this.state.meetups.map(meetup =>
            meetup.date_time > new Date().toISOString() ? (
              <p key={meetup.id} className="container-fluid">
                <li>{meetup.place_name}</li>
                <li>{meetup.date_time}</li>
              </p>
            ) : null
          )}
        </div>
      </div>
    );
  }
}

export default MeetupLocationIndex;
