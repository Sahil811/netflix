import React, { useState, useEffect } from "react";
import "./Row.css";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  );
};

export default Row;
