import React from "react";

import { Col } from "react-bootstrap";

const AchievementCard = ({ data }) => {
  return (
    <Col lg="4">
      <div className="pb-5 text-center">
        <img
          className="achievement-card-image mb-3 experience-card-image"
          src={data.icon}
          alt=""
        />
        <p className="lead">{data.text}</p>
      </div>
    </Col>
  );
};

export default AchievementCard;
