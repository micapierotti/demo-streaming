import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "./images/placeholder.png";
import { useDispatch } from "react-redux";
import { headerTextChanged } from "../redux/headerSlice";
import useFetch from "../useFetch";
import { URL } from "../constants";

const Home = () => {
  const handleOnClickText = (text) => dispatch(headerTextChanged({ text }));
  const { error, loading } = useFetch(URL);
  const dispatch = useDispatch();
  useEffect(() => {
    handleOnClickText("Popular Titles");
  }, []);

  return (
    <div className="p-0 container-fluid">
      <div className="wrapper">
        <div className="row no-gutters">
          {error ? (
            <div>Oops! Something went wrong...</div>
          ) : loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <div className="col-auto">
                <div className="bloque">
                  <Link to="/series">
                    <img src={logo} alt="logo" className="logo-series-movies" />
                    <h2 id="text">SERIES</h2>
                  </Link>
                </div>
                <p className="paragraph-size">Popular Series</p>
              </div>
              <div className="col-auto">
                <div className="bloque">
                  <Link to="/movies">
                    <img src={logo} alt="logo" className="logo-series-movies" />
                    <h2 id="text">MOVIES</h2>
                  </Link>
                </div>
                <p className="paragraph-size">Popular Movies</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
