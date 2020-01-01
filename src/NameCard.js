import React from "react";

const NameCard = (props) => {
  return (
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img alt="alt" src={props.image} />
        </div>
        <div className="content">
            {props.children}
        </div>
        <div className="extra content">
          <span className="right floated">Joined in 2013</span>
          <span>
            <i className="user icon"></i>
            75 Friends
          </span>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
