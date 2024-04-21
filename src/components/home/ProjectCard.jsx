import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ value }) => {
  console.log("value : " + value.homepage);
  const { name, description, svn_url, languages_url, homepage } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
            {homepage && (
              <a href={homepage} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
          <Card.Text>
            {!description ? "" : description || <Skeleton count={3} />}{" "}
          </Card.Text>
          {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
          <hr />
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={3} />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a
        href={`${svn_url}/archive/master.zip`}
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fab fa-github" /> Clone Project
      </a>
      <a
        href={svn_url}
        target=" _blank"
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fab fa-github" /> Repo
      </a>
    </div>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
            <a
              key={language}
              className="card-link"
              href={repo_url + `/search?l=${language}`}
              target=" _blank"
              rel="noopener noreferrer"
            >
              <span className="badge bg-light text-dark">
                {language}:{" "}
                {Math.trunc((data[language] / total_count) * 1000) / 10} %
              </span>
            </a>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

export default ProjectCard;
