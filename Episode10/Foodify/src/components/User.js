import React from "react";
import { TbBrandLinkedinFilled } from "react-icons/tb";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location } = this.props;
    return (
      <>
        <h1 className="font-bold text-3xl">Contact Us</h1>
        <h2 className="pt-4 pb-2">Name: {name}</h2>
        <h3 className="py-2">Location: {location}</h3>
        <h4 className="py-2 flex items-center">
          Contact:{" "}
          <a href="https://www.linkedin.com/in/aditi-garg-7b3459178/" target="_blank" className="mx-2 text-2xl">
            <TbBrandLinkedinFilled color="#0077B5"/>
          </a>
        </h4>
      </>
    );
  }
}

export default User;
