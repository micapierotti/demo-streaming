import React from "react";
import "./footer.css";
import Facebook from "./images/facebook-white.svg";
import Instagram from "./images/instagram-white.svg";
import Twitter from "./images/twitter-white.svg";
import PlayStore from "./images/play-store.svg";
import AppStore from "./images/app-store.svg";
import WindowsStore from "./images/windows-store.svg";
import { useDispatch } from "react-redux";
import { headerTextChanged } from "../redux/headerSlice";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleOnClickText = (text) => dispatch(headerTextChanged({ text }));

  const dispatch = useDispatch();

  return (
    <div className="footer">
      <div className="wrapper">
        <br />
        <br />
        <Link to="/" onClick={() => handleOnClickText("Popular Titles")}>
          <span className="text-white non-p">Home</span>
        </Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <a className="text-white" href="#">
          Terms and Conditions
        </a>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <a className="text-white" href="#">
          Privacy Policy
        </a>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <a className="text-white" href="#">
          Collection Statement
        </a>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <a className="text-white" href="#">
          Help
        </a>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <a className="text-white" href="#">
          Manage Account
        </a>
        <br />
        <br />
        <p>Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</p>
        {/* ASSETS */}
        <br />
        <div /* className="assets" */>
          <div className="d-flex justify-content-between bd-highlight mb-3">
            <div className="icons pt-2 pb-2 bd-highlight ">
              <object
                className="imagen fb"
                data={Facebook}
                type="image/svg+xml"
              >
                facebook
              </object>
              <object
                className="imagen other"
                data={Twitter}
                type="image/svg+xml"
              >
                twitter
              </object>
              <object
                className="imagen other"
                data={Instagram}
                type="image/svg+xml"
              >
                instagram
              </object>
            </div>
            <div className="p-2 bd-highlight">
              <object className="imagen2" data={AppStore} type="image/svg+xml">
                app-store
              </object>
              <object className="imagen2" data={PlayStore} type="image/svg+xml">
                play-store
              </object>
              <object
                className="imagen2"
                data={WindowsStore}
                type="image/svg+xml"
              >
                windows-store
              </object>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
