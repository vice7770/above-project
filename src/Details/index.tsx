import React from "react";
import { useParams } from "react-router-dom";
const Details = () => {
    const { id } = useParams<{ id: string, type: string }>();
  return (
    <div>
      <h1>Details</h1>
        <p>{id}</p>
    </div>
  );
};

export default Details;