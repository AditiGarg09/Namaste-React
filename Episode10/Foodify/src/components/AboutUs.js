import User from "./User";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUsVideo">
        <iframe
          width="90%"
          height="470"
          src="https://www.youtube.com/embed/fLz2fgU_x1Q"
          title="Foodify"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <User name={"Aditi Garg"} location={"Delhi"} />
      <div className="aboutUsFuture">
        <h1>What’s In Store For The Future?</h1>
        <p>
          Foodify has grand plans to be India’s most loved hyperlocal player. It
          aims to be the most accessible platform on the network - reimagining
          the meaning of convenience in the country through a variety of service
          offerings.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
