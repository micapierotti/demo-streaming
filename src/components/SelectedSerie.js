import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSerieSelected,
  setSelectedSerie,
  selectSeries,
} from "../redux/seriesSlice";
import { useParams } from "react-router-dom";
import { fetchSerie } from "../api";
import { headerTextChanged } from "../redux/headerSlice";

const SelectedSerie = () => {
  const { indexId } = useParams();
  const serie = useSelector(selectSerieSelected);
  const series = useSelector(selectSeries);

  const dispatch = useDispatch();
  const handleOnClickText = (text) => dispatch(headerTextChanged({ text }));

  useEffect(() => {
    handleOnClickText("Popular Series");
    async function fetchSerieData() {
      if (!serie) {
        let serieTemp;
        if (series?.length > 0) {
          serieTemp = series[indexId];
        } else {
          serieTemp = await fetchSerie(indexId);
        }
        dispatch(setSelectedSerie({ serie: serieTemp }));
      }
    }
    fetchSerieData();
  }, []);

  let {
    title,
    images = { "Poster Art": { url: undefined } },
    description,
    releaseYear,
  } = serie || {};

  return (
    !!serie && (
      <div className="p-0 container-fluid">
        <div className="wrapper">
          <div className="d-flex justify-content-start">
            <div className="bloque serie mt-5">
              <img src={images["Poster Art"].url} alt={title} />
            </div>
            <div className="flex-grow-1 mt-5 ml-3">
              <h1 className="title">{title}</h1>
              <p className="paragraph-size par-adjust text-justify">
                {description}
              </p>
              <p className="paragraph-size par-adjust text-justify">
                <b>Release year:</b> {releaseYear}
              </p>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    )
  );
};

export default SelectedSerie;
