import { Component } from "react";
import User from "./User";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <>
        <div className="aboutUsVideo">
          <iframe
            width="90%"
            height="470"
            src="https://www.youtube.com/embed/fLz2fgU_x1Q"
            title="Foodify"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <User name={"Aditi Garg"} location={"Delhi"} />
        {/* <User name={"Second"} location={"Delhi"} /> */}
        <div className="aboutUsFuture">
          <h1>What’s In Store For The Future?</h1>
          <p>
            Foodify has grand plans to be India’s most loved hyperlocal player.
            It aims to be the most accessible platform on the network -
            reimagining the meaning of convenience in the country through a
            variety of service offerings.
          </p>
        </div>
      </>
    );
  }
  // return (
  //   <>
  //     <div className="aboutUsVideo">
  //       <iframe
  //         width="90%"
  //         height="470"
  //         src="https://www.youtube.com/embed/fLz2fgU_x1Q"
  //         title="Foodify"
  //         frameborder="0"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //         referrerpolicy="strict-origin-when-cross-origin"
  //         allowfullscreen
  //       ></iframe>
  //     </div>
  //     <User name={"Aditi Garg"} location={"Delhi"} />
  //     <div className="aboutUsFuture">
  //       <h1>What’s In Store For The Future?</h1>
  //       <p>
  //         Foodify has grand plans to be India’s most loved hyperlocal player. It
  //         aims to be the most accessible platform on the network - reimagining
  //         the meaning of convenience in the country through a variety of service
  //         offerings.
  //       </p>
  //     </div>
  //   </>
  // );
}

export default AboutUs;
