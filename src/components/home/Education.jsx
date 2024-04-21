import React from "react";
import { Container, Row } from "react-bootstrap";
import EducationCard from "./EducationCard";
import { Jumbotron } from "./migration";

const Education = ({ education }) => {
  console.log("education : " + JSON.stringify(education));
  return (
    <Jumbotron className="m-0">
      <h2 className="display-4 mb-5 text-center">{education.heading}</h2>
      <Container>
        <Row>
          {education.data.map((data, index) => (
            <EducationCard
              key={index}
              institutionType={data.institutionType}
              title={data.title}
              performance={data.performance}
              institutionName={data.institutionName}
              year={data.year}
            />
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Education;
