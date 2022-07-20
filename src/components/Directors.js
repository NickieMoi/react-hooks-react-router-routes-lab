import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}</div>;
const Directors=() =>{
  const directionss=directors.map((director)=>(
    <div key={director.name}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie)=>(
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return <div>
    <h1>Directors Page</h1>
    {directionss}
  </div>;
}
}
export default Directors;