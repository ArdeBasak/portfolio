import React from "react";

import { Col } from "react-bootstrap";

const ExperienceCard = ({ data, onExperienceSelected }) => {
  return (
    <Col
      className="cursor-pointer"
      lg="4"
      onClick={() => onExperienceSelected(data)}
    >
      <div className="pb-5 text-center">
        <img
          className=" bg-white mb-3 experience-card-image"
          src={data.companylogo}
          alt=""
        />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
