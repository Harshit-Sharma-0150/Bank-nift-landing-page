import React from "react";

const UserCard = ({ profileImage, name, about }) => {
  return (
    <div
      className="d-flex p-3 align-items-center rounded-5    "
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
      <img
        src={profileImage}
        alt="profile Image"
        className="rounded-circle me-3 w-25"
      />

      <div>
        <h5>{name}</h5>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default UserCard;
