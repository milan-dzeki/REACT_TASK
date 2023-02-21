import React from 'react';
import '../styles/components/filters.scss';

const Filters = (props) => {
  return (
    <div className="filters">
      <p className="filters__title">
        Select category:
      </p>
      <div className="filters__categories">
        <button 
          className={`filters__btn ${props.category === "now_playing" ? "filters__btn--active" : ""}`}
          onClick={() => props.getCategoryMovies("now_playing")}>
          now in theatres
        </button>
        <button 
          className={`filters__btn ${props.category === "popular" ? "filters__btn--active" : ""}`}
          onClick={() => props.getCategoryMovies("popular")}>
          most popular
        </button>
        <button 
          className={`filters__btn ${props.category === "top_rated" ? "filters__btn--active" : ""}`}
          onClick={() => props.getCategoryMovies("top_rated")}>
          top rated
        </button>
        <button 
          className={`filters__btn ${props.category === "upcoming" ? "filters__btn--active" : ""}`}
          onClick={() => props.getCategoryMovies("upcoming")}>
          upcoming
        </button>
      </div>
      {
        props.category && (
          <p className="filters__selected">
            {props.category.includes("_") ? props.category.split("_").join(" ") : props.category} movie list
          </p>
        )
      }
    </div>
  );
};

export default Filters;