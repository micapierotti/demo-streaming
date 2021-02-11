import React, { useEffect } from "react";
import "./series-movies.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSeries,
  setSelectedSerie,
  setSeries,
} from "../redux/seriesSlice";
import { Link } from "react-router-dom";
import { headerTextChanged } from "../redux/headerSlice";
import { fetchData } from "../api";

const Series = () => {
  const series = useSelector(selectSeries);
  const dispatch = useDispatch();

  const handleOnClickSerie = (serie) => dispatch(setSelectedSerie({ serie }));

  const handleOnClickText = (text) => dispatch(headerTextChanged({ text }));

  useEffect(() => {
    handleOnClickText("Popular Series");
    async function fetchSeries() {
      if (!series?.length) {
        const { series } = await fetchData();
        dispatch(setSeries({ series }));
      }
    }
    fetchSeries();
  }, []);

  return (
    <div className="container-fluid">
      <div className="wrapper">
        <div className="d-flex flex-wrap justify-content-left">
          {Array.isArray(series) &&
            series.map((serie, index) => {
              const { title, images } = serie;
              return (
                <div key={title}>
                  <Link
                    to={`/series/${index}`}
                    onClick={() => handleOnClickSerie(serie)}
                  >
                    <div className="bloque">
                      <img
                        src={images["Poster Art"].url}
                        alt={title}
                        className="logo-series-movies"
                      />
                    </div>
                  </Link>
                  <div className="ajuste-tam text-wrap">
                    <p className="paragraph-size">{title}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Series;
