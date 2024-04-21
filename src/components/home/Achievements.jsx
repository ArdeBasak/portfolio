import React from "react";
import { Row } from "react-bootstrap";
import AchievementCard from "./AchievementCard";
import { Jumbotron } from "./migration";

const Achievements = ({ achievements }) => {
  return (
    <Jumbotron className="bg-white m-0">
      <h2 className="display-4 mb-5 text-center">{achievements.heading}</h2>
      <Row>
        {achievements.data.map((data, index) => {
          return <AchievementCard key={index} data={data} />;
        })}
      </Row>
    </Jumbotron>
  );
};

export default Achievements;
