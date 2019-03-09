//This page contains AJAX requests to the back-end/server

const BASE_URL = `http://localhost:3000/api/v1`;

export const MeetupLocation = {
  all() {
    return fetch(`${BASE_URL}/meetup_locations`, {
      credentials: "include"
    }).then(res => res.json());
  }
};
