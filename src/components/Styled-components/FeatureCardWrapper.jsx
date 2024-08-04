import styled from "styled-components";

export const FeatureCardWrapper = styled.div`
  .feature-card {
    padding: 0.5rem;
    border-radius: 20px;
  }
  .icon-box {
    width: fit-content;
    padding: 0.7rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
  .even-icon-box {
    background: linear-gradient(90deg, #fcea15 0%, #f86a1b 100%);
  }
  .odd-icon-box {
    background: linear-gradient(308.52deg, #6912cb 21.69%, #2870fa 98.63%);
  }
  p {
    font-size: 14px;
    color: #999999;
  }
  h5 {
    color: #333333;
  }
  .feature-card:nth-child(even):hover {
    background: linear-gradient(90deg, #fcea15 0%, #f86a1b 100%) !important;
  }

  .feature-card:nth-child(odd):hover {
    background: linear-gradient(
      308.52deg,
      #6912cb 21.69%,
      #2870fa 98.63%
    ) !important;
  }

  .feature-card:hover h5 {
    color: #fff;
  }
  .feature-card:hover p {
    color: #fff;
  }
  .feature-card:hover .icon-box {
    background: #fff !important;
  }
`;
