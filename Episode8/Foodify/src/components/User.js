import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatarUrl: "Dummy",
      },
    };
    // console.log(this.props.name, "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name, "Child Mount");
    // const data = await fetch("https://api.github.com/users/aditigarg09");
    // const jsonData = await data.json();
    // console.log(jsonData);
    // this.setState({ userInfo: jsonData });
    this.timer = setInterval(()=>{
      console.log("Interval");
    },1000);
  }

  componentDidUpdate(){
    console.log("Component Did Update");
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("Component Will Unmount");
  }

  render() {
    // const { name, location, avatarUrl } = this.state.userInfo;
    // const { count } = this.state;
    // console.log(this.props.name, "Child Render");
    const { name, location } = this.props;
    return (
      <div className="userCard">
        {/* <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count++
        </button> */}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        {/* <img src={avatarUrl} /> */}
        <h4>Contact: https://www.linkedin.com/in/aditi-garg-7b3459178/</h4>
      </div>
    );
  }
}

export default User;
