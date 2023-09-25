import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="Content">
            <div className="Left-content">
              <div className="links">
                <Link to={"/accounts"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>{" "}
                  Account
                </Link>
                {/* <Link to={"/profile"}>Profile</Link> */}
                <Link to={"/friends"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>{" "}
                  Friends
                </Link>
                <Link to={"/memories"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-stopwatch"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                  </svg>{" "}
                  Memories
                </Link>
                <Link to="/saved">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bookmark-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                  </svg>{" "}
                  Saved
                </Link>
                <Link to="/groups">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 640 512"
                  >
                    <path d="M48 48h88c13.3 0 24-10.7 24-24s-10.7-24-24-24H32C14.3 0 0 14.3 0 32V136c0 13.3 10.7 24 24 24s24-10.7 24-24V48zM175.8 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-26.5 32C119.9 256 96 279.9 96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3zm368 80c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6h56.1zm-89.4 0c-8.6-24.3-29.9-42.6-55.9-47c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24zM464 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-80-32a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM504 48h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-17.7-14.3-32-32-32H504c-13.3 0-24 10.7-24 24s10.7 24 24 24zM48 464V376c0-13.3-10.7-24-24-24s-24 10.7-24 24V480c0 17.7 14.3 32 32 32H136c13.3 0 24-10.7 24-24s-10.7-24-24-24H48zm456 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H608c17.7 0 32-14.3 32-32V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v88H504z" />
                  </svg>{" "}
                  Groups
                </Link>
                <Link to="/marketplace">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-shop-window"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                  </svg>{" "}
                  Marketplace
                </Link>
                <Link to="/feeds">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar4-range"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                    <path d="M9 7.5a.5.5 0 0 1 .5-.5H15v2H9.5a.5.5 0 0 1-.5-.5v-1zm-2 3v1a.5.5 0 0 1-.5.5H1v-2h5.5a.5.5 0 0 1 .5.5z" />
                  </svg>{" "}
                  Feeds
                </Link>
                <Link to="/events">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-window-stack"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                    <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10ZM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Zm1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3Zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h12Z" />
                  </svg>{" "}
                  Events
                </Link>
                <Link to="/adsManager">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bar-chart-line"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                  </svg>{" "}
                  Ads Manager
                </Link>
                <Link to="/fundraiser">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bag-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
                    />
                  </svg>{" "}
                  Fundraiser
                </Link>
                <Link to="/adCenter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-megaphone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z" />
                  </svg>{" "}
                  Ad Center
                </Link>
                <Link to="/climateSciencecenter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-globe-central-south-asia"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z" />
                  </svg>{" "}
                  Climate Science Center
                </Link>
                <Link to="/gamingVideo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-joystick"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z" />
                    <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z" />
                  </svg>{" "}
                  Gaming Video
                </Link>
                <Link to="/messenger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-messenger"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                  </svg>{" "}
                  Messenger
                </Link>
                <Link to="/messengerKids">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                  </svg>{" "}
                  Messenger Kids
                </Link>
                <Link to="/orderandpayments">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-credit-card-2-front"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                    <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                  </svg>{" "}
                  Orders and payments
                </Link>
                <Link to="/pages">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-flag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />
                  </svg>{" "}
                  Pages
                </Link>
                <Link to="/games">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-controller"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                    <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                  </svg>{" "}
                  Play Games
                </Link>
                <Link to="/recentadactivity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-journal-album"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5zm1 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z" />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                  </svg>{" "}
                  Recent ad activity
                </Link>
              </div>
              <hr />
              <div className="YourShortcuts">
                <div className="games" style={{ display: "flex" }}>
                  <img
                    src="https://play-lh.googleusercontent.com/GP8H9ZbM-FWke-U-N9lGIRVqHX6l4ULTqVpilCKgicIw42D1qEVinQO0_KsFAIft1OEh"
                    alt="Error"
                    style={{
                      height: "60px",
                      width: "60px",
                      marginLeft: "10px",
                    }}
                  />
                  <h4 style={{ marginLeft: "20px" }}>Ludo King - Instant</h4>
                </div>
                <div className="game" style={{ display: "flex" }}>
                  <img
                    src="https://images-cdn.ubuy.co.in/63c4750b022e8647770366e5-uno-flip-family-card-game-with-112.jpg"
                    alt="Errors"
                    style={{
                      height: "60px",
                      width: "60px",
                      marginTop: "15px",
                      marginLeft: "10px",
                    }}
                  />
                  <h4 style={{ marginLeft: "20px" }}>UNO - Instant</h4>
                </div>
                <div
                  className="ad,privacy,terms,etc."
                  style={{ margin: "10px", fontSize: "15px" }}
                >
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Privacy.
                  </a>
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Terms.
                  </a>
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Advertising.
                  </a>
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Ad Choices.
                  </a>
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Cookies.
                  </a>
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    About.
                  </a>
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Careers.
                  </a>
                  <br />
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Developers.
                  </a>
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Help.Meta &copy; 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="Middle-Content">
              <div className="middleTop">
                <div className="Stories">
                  <div className="card-group">
                    <div
                      className="card"
                      style={{
                        borderRadius: "20px",
                        height: "250px",
                        width: "150px",
                        backgroundColor: "white",
                        marginLeft: "-5px",
                      }}
                    >
                      <img
                        src="https://static.thenounproject.com/png/5034901-200.png"
                        className="card-img-top"
                        alt="Error"
                        style={{
                          width: "118px",
                          height: "110px",
                          borderRadius: "20px",
                        }}
                      />
                      <hr />
                      <h3
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "16px",
                          marginBottom: "3px",
                        }}
                      >
                        Creat Story
                      </h3>
                      <p
                        style={{
                          display: "flex",
                          marginLeft: "10px",
                          fontSize: "15px",
                        }}
                      >
                        Add a photo or video to share to your story. Tap below
                        Your Story.
                      </p>
                    </div>
                    <div className="card ">
                      <img
                        src="https://i.pinimg.com/550x/a7/bb/c8/a7bbc8c4d05cedc95e795e0f7329d19d.jpg"
                        className="card-img-top"
                        alt="Error"
                        style={{
                          display: "flex",
                          width: "150px",
                          height: "250px",
                          borderRadius: "20px",
                          marginLeft: "10px",
                        }}
                      />
                    </div>

                    <div className="card">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BNTkzNjJhYjQtNjU0Yy00Y2M3LWI2ZDgtNDRhZmNlNDFjMjQ5XkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_FMjpg_UX1000_.jpg"
                        className="card-img-top"
                        alt="Error"
                        style={{
                          width: "150px",
                          height: "250px",
                          borderRadius: "20px",
                          marginLeft: "-10px",
                        }}
                      />
                    </div>

                    <div className="card">
                      <img
                        src="https://w0.peakpx.com/wallpaper/468/382/HD-wallpaper-crayon-shinchan-anime.jpg"
                        className="card-img-top"
                        alt="Error"
                        style={{
                          width: "150px",
                          height: "250px",
                          borderRadius: "20px",
                          marginLeft: "-8px",
                          marginRight: "-14px",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="posts">
                  <div className="thought">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4rem"
                      height="3rem"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>{" "}
                    <input
                      className="searchbar"
                      type="text"
                      placeholder="Whats on your mind?"
                    />
                  </div>
                  <hr />
                  <div className="feelingPostingVideos">
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26px"
                        height="23px"
                        fill="red"
                        class="bi bi-camera-video"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
                        />
                      </svg>
                      {" Live Video"}
                    </Link>
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26px"
                        height="23px"
                        fill="green"
                        class="bi bi-file-image"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z" />
                      </svg>
                      {" Photo/video "}
                    </Link>
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25px"
                        height="23px"
                        fill="gold"
                        class="bi bi-emoji-laughing"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
                      </svg>
                      {" Feeling/activity "}
                    </Link>
                  </div>
                </div>
                <div className="photostolikeandShare">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8vUi1IST09JRKGqZu_cQwJ2xPz8tSTK2etlpg5Wwkyii036FKH79l1w5WGAoCKIb6rg&usqp=CAU"
                    alt="Upload Error"
                  />
                </div>
                <div className="photostolikeandShare">
                  <img
                    src="https://i.imgflip.com/7tcbos.jpg"
                    alt="Upload Error"
                  />
                </div>
                <div className="photostolikeandShare">
                  <img
                    src="https://images.template.net/73578/Free-Happy-Birthday-Meme-5.jpg"
                    alt="Upload Error"
                  />
                </div>
                <div className="photostolikeandShare">
                  <img
                    src="https://i.pinimg.com/550x/1d/e6/98/1de698eca35c67ccf82431b967ff22d7.jpg"
                    alt="Upload Error"
                  />
                </div>
                <div className="photostolikeandShare">
                  <img
                    src="https://images7.memedroid.com/images/UPLOADED961/62fb626f4932b.jpeg"
                    alt="Upload Error"
                  />
                </div>
                <div className="photostolikeandShare">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf3cbjZg6MzsBwMLdgZHXwivjYeN4mOenRmItdNIMEvzc6XO834q35jpHI2Bzy6sCseg&usqp=CAU"
                    alt="Upload Error"
                  />
                </div>
              </div>
            </div>
            <div className="Right-content">
              <div className="sponsored">
                <div className="heading">
                  <h3>Sponsered</h3>
                  <div className="left">
                    <img
                      src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/x/9/-original-imaggsudg5fufyte.jpeg?q=70"
                      alt="Upload Error"
                      style={{
                        height: "100px",
                        width: "100px",
                      }}
                    />

                    <div className="text">
                      <h4>Google Pixel 7 (Snow, 128 GB) (8 GB RAM)</h4>
                    </div>
                  </div>
                  <div className="left">
                    <img
                      src="https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70"
                      alt="Upload Error"
                      style={{
                        height: "100px",
                        width: "150px",
                      }}
                    />
                    <div className="text">
                      <h4>APPLE iPhone 13 (Starlight, 128 GB)</h4>
                    </div>
                  </div>
                  <div className="leff" style={{ display: "flex" }}>
                    <img
                      src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=70"
                      alt="Upload Error"
                      style={{
                        height: "100px",
                        width: "100px",
                        marginTop: "30px",
                      }}
                    />
                    <div className="text">
                      <h4>POCO C55 (Cool Blue, 128 GB) (6 GB RAM)</h4>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="next-content">
                <h3
                  style={{
                    color: "grey",
                    marginLeft: "50px",
                    marginTop: "20px",
                  }}
                >
                  Birthdays
                </h3>
                <p
                  style={{
                    marginLeft: "40px",
                    fontSize: "17px",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  🎁 Someones Birthday Today!
                </p>
              </div>
              <hr />
              <div className="contact" style={{ display: "flex" }}>
                <h3 style={{ color: "grey", marginLeft: "40px" }}>Contacts </h3>
                <div
                  className="search"
                  style={{ marginLeft: "120px", marginTop: "28px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
                <div
                  className="icon-3-dots"
                  style={{ marginTop: "26px", marginLeft: "27px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </div>
              </div>
              <div
                className="userContent"
                style={{
                  fontSize: "23px",
                  marginLeft: "50px",
                  fontFamily: "sans-serif",
                }}
              >
                <h6 style={{ marginTop: "10px" }}>User name</h6>
                <h6>User name</h6>
                <h6>User name</h6>
                <h6>User name</h6>
                <h6>User name</h6>
                <h6>User name</h6>
                <h6>User name</h6>
                <h6>User name</h6>
                <h6>User name</h6>
                <h6>User name</h6>
                <h6>User name</h6>
                <h6>User name</h6>
                <h6>User name</h6>
              </div>
              <hr />
              <div className="Groups">
                <h3 style={{ color: "grey", marginLeft: "40px" }}>
                  Group Conversations
                </h3>
                <div
                  className="Gnames"
                  style={{
                    fontSize: "23px",
                    marginLeft: "50px",
                    fontFamily: "sans-serif",
                  }}
                >
                  <h6 style={{ marginTop: "30px" }}>Group name</h6>
                  <h6>Group name</h6>
                  <h6>Group name</h6>
                </div>
                <div className="createGroups" style={{ marginTop: "-50px" }}>
                  <div className="Pluslogo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26px"
                      height="26px"
                      fill="currentColor"
                      className="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                      style={{
                        marginLeft: "20px",
                        marginBottom: "-53px",
                        color: "grey",
                        marginRight: "15px",
                      }}
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                    <p
                      style={{
                        color: "grey",
                        marginLeft: "60px",
                        marginTop: "25px",
                        fontSize: "19px",
                      }}
                    >
                      Create new group
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
