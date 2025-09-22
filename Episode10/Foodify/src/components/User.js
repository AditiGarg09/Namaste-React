import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location } = this.props;
    return (
      <div className="userCard">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: https://www.linkedin.com/in/aditi-garg-7b3459178/</h4>
      </div>
    );
  }
}

export default User;
