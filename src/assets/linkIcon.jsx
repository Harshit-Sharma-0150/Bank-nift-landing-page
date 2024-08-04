import React from "react";

const LinkIcon = ({ fill = "#fff", size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_762_33"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="60"
        height="60"
      >
        <rect width="60" height="60" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_762_33)">
        <path d="M17.5001 42.4977C14.0418 42.4977 11.0939 41.279 8.65637 38.8415C6.21887 36.404 5.00012 33.4561 5.00012 29.9977C5.00012 26.5394 6.21887 23.5915 8.65637 21.154C11.0939 18.7165 14.0418 17.4977 17.5001 17.4977H25.0001C25.7085 17.4977 26.3022 17.7373 26.7814 18.2165C27.2605 18.6957 27.5001 19.2894 27.5001 19.9977C27.5001 20.7061 27.2605 21.2998 26.7814 21.779C26.3022 22.2582 25.7085 22.4977 25.0001 22.4977H17.5001C15.4168 22.4977 13.646 23.2269 12.1876 24.6852C10.7293 26.1436 10.0001 27.9144 10.0001 29.9977C10.0001 32.0811 10.7293 33.8519 12.1876 35.3102C13.646 36.7686 15.4168 37.4977 17.5001 37.4977H25.0001C25.7085 37.4977 26.3022 37.7373 26.7814 38.2165C27.2605 38.6957 27.5001 39.2894 27.5001 39.9977C27.5001 40.7061 27.2605 41.2998 26.7814 41.779C26.3022 42.2582 25.7085 42.4977 25.0001 42.4977H17.5001ZM22.5001 32.4977C21.7918 32.4977 21.198 32.2582 20.7189 31.779C20.2397 31.2998 20.0001 30.7061 20.0001 29.9977C20.0001 29.2894 20.2397 28.6957 20.7189 28.2165C21.198 27.7373 21.7918 27.4977 22.5001 27.4977H37.5001C38.2085 27.4977 38.8022 27.7373 39.2814 28.2165C39.7605 28.6957 40.0001 29.2894 40.0001 29.9977C40.0001 30.7061 39.7605 31.2998 39.2814 31.779C38.8022 32.2582 38.2085 32.4977 37.5001 32.4977H22.5001ZM35.0001 42.4977C34.2918 42.4977 33.698 42.2582 33.2189 41.779C32.7397 41.2998 32.5001 40.7061 32.5001 39.9977C32.5001 39.2894 32.7397 38.6957 33.2189 38.2165C33.698 37.7373 34.2918 37.4977 35.0001 37.4977H42.5001C44.5835 37.4977 46.3543 36.7686 47.8126 35.3102C49.271 33.8519 50.0001 32.0811 50.0001 29.9977C50.0001 27.9144 49.271 26.1436 47.8126 24.6852C46.3543 23.2269 44.5835 22.4977 42.5001 22.4977H35.0001C34.2918 22.4977 33.698 22.2582 33.2189 21.779C32.7397 21.2998 32.5001 20.7061 32.5001 19.9977C32.5001 19.2894 32.7397 18.6957 33.2189 18.2165C33.698 17.7373 34.2918 17.4977 35.0001 17.4977H42.5001C45.9585 17.4977 48.9064 18.7165 51.3439 21.154C53.7814 23.5915 55.0001 26.5394 55.0001 29.9977C55.0001 33.4561 53.7814 36.404 51.3439 38.8415C48.9064 41.279 45.9585 42.4977 42.5001 42.4977H35.0001Z" />
      </g>
    </svg>
  );
};

export default LinkIcon;
