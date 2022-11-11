import React from "react";

const DisplayExperience = (props) => {
  const { name, position, tasks, beginning, end } = props;

  return (
    <div>
      <p>{name}</p>
      <p>{position}</p>
      <p>{tasks}</p>
      <p>{beginning}</p>
      <p>{end}</p>
    </div>
  );
};

export default DisplayExperience;
