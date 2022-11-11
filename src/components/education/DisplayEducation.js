import React from "react";

const DisplayEducation = (props) => {
  const { name, aos, dos } = props;

  return (
    <div>
      <p>{name}</p>
      <p>{aos}</p>
      <p>{dos}</p>
    </div>
  );
};

export default DisplayEducation;