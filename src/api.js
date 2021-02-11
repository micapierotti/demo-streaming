import { URL } from "./constants";

export const fetchData = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("error al hacer fetch data");
  }
  const all = await response.json();
  return all.entries.reduce(
    (acumulator, entry) => {
      if (entry.programType === "movie") {
        acumulator.movies.push(entry);
        return acumulator;
      }
      acumulator.series.push(entry);
      return acumulator;
    },
    { movies: [], series: [] }
  );
};

export const fetchSerie = async (index) => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("error al hacer fetch serie");
  }
  const all = await response.json();
  const series = all.entries.filter((entry) => {
    return entry.programType === "series";
  });
  return series[index];
};

export const fetchMovie = async (index) => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("error al hacer fetch movie");
  }
  const all = await response.json();
  const movies = all.entries.filter((entry) => {
    return entry.programType === "movie";
  });
  return movies[index];
};
