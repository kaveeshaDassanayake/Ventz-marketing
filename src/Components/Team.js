import React from "react";
import duasha from "../Assets/duasha.jpg";
import danusha from "../Assets/danusha.jpeg";
import lithila from "../Assets/lithila.jpeg";
import kaveesha from "../Assets/kaveesha.jpeg";
import direndra from "../Assets/direndra.jpg";

const Team = () => {
  const TeamInfoData = [
    {
      image: duasha,
      title: "Duasha Indeewarie",
    },
    {
      image: danusha,
      title: "Danusha Navod",
    },
    {
      image: lithila,
      title: "Lithila Ginige",
    },
    {
      image: kaveesha,
      title: "Kaveesha Dassanayake",
    },
    {
      image: direndra,
      title: "Direndra Kavindu",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading" >Team</p> */}
        <h1 className="primary-heading" id="team">Meet the Team</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {TeamInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
