import React from "react";
import { Card, Col } from "react-bootstrap";

const EducationCard = ({
  institutionType,
  title,
  performance,
  institutionName,
  year,
}) => {
  return (
    <Col md="4">
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          {institutionType === "College" ? (
            <div>
              <div className="education-header">
                <Card.Title>{title}</Card.Title>
              </div>
              <Card.Text>
                {institutionName}
                <br />
                DGPA: {performance}
                <br />
                Year: {year}
              </Card.Text>
            </div>
          ) : (
            <div>
              <div className="education-header">
                <Card.Title>{title}</Card.Title>
              </div>
              <Card.Text>
                {institutionName}
                <br />
                Percentage: {performance}
                <br />
                Year: {year}
              </Card.Text>
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EducationCard;
