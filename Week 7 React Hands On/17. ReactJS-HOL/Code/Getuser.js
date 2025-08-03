import React, { Component } from 'react';

class Getuser extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      this.setState({ user: data.results[0] });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return <p style={{ textAlign: "center" }}>Loading user...</p>;
    }

    return (
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 'bold' }}>
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <img
          src={user.picture.large}
          alt="User"
          style={{ borderRadius: '10px', marginTop: '20px' }}
        />
      </div>
    );
  }
}

export default Getuser;
