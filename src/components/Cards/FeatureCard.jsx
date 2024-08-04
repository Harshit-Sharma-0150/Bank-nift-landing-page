import React from "react";
import { FeatureCardWrapper } from "../Styled-components/FeatureCardWrapper";

const FeatureCard = ({ data, Icon }) => {
  return (
    <FeatureCardWrapper>
      <div className="feature-card">
        <div className={`icon-box ${data.iconBoxClass}`}>{Icon}</div>
        <h5>{data?.title}</h5>
        <p>{data?.content}</p>
      </div>
    </FeatureCardWrapper>
  );
};

export default FeatureCard;
