import React from "react";
import "./header.css";
import { useSelector } from "react-redux";
import "../../node_modules/bootstrap/scss/bootstrap.scss";
import { useDispatch } from "react-redux";
import { headerTextChanged } from "../redux/headerSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const text = useSelector((state) => state.header.text);
  const handleOnClickText = (text) => dispatch(headerTextChanged({ text }));

  const dispatch = useDispatch();
  return (
    <div className="header2">
      <div className="header1">
        <div className="wrapper">
          <div className="d-flex bd-highlight">
            <div className="pt-2 flex-grow-1 ">
              <Link
                to="/"
                onClick={() => handleOnClickText("Popular Titles")}
                className="dec"
              >
                <h1 className="headerTitle shad">DEMO Streaming</h1>
              </Link>
            </div>
            <div className="d-flex bd-highlight">
              <a className="login" href="#">
                Log in
              </a>
            </div>
            <div className="d-flex p-2 bd-highlight">
              <button className="button freeTrial">
                Start your free trial
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <h3 className="headerTitle">{text}</h3>
      </div>
    </div>
  );
};

export default Header;
