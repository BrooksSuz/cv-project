import React from "react";

const DisplayGeneralInfo = (props) => {
  const { name, email, phone } = props;

  return (
    <div className="cv-general-info">
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default DisplayGeneralInfo;