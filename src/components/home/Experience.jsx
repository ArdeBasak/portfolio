import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from "./migration";
import { Container, Row } from "react-bootstrap";

const Experience = ({ experiences }) => {
  const [experienceSelected, setExperienceSelected] = useState(null);

  const handleExperienceSelected = (experience) => {
    setExperienceSelected((prevExperience) =>
      prevExperience === experience ? null : experience
    );
  };

  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">{experiences.heading}</h2>
          <Row>
            {experiences.data.map((data, index) => (
              <ExperienceCard
                key={index}
                data={data}
                onExperienceSelected={handleExperienceSelected}
              />
            ))}
          </Row>
          {experienceSelected && (
            <div className="experience-details-box">
              <ul>
                {experienceSelected.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Experience;
