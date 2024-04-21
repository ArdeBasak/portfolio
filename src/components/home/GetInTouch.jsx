import React from "react";

const GetInTouch = ({ heading, email, phone }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        I'm currently looking for Senior-level opportunities in Tech! If you
        know of any positions available, if you have any questions, or if you
        just want to say hi, please feel free to email me @{" "}
        <a className="text-decoration-none" href={`mailto:${email}`}>
          {email}
        </a>{" "}
        or call me on {phone}.
      </p>
    </>
  );
};

export default GetInTouch;
