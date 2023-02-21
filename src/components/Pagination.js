import React from 'react';
import '../styles/components/pagination.scss';

const Pagination = (props) => {
  return (
    <div className="pagination">
      <button className={`pagination__btn ${props.loading || props.currentPage === 1 ? "pagination__btn--disabled" : ""}`} onClick={props.prevPage}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091 6.757 12 17 4.909v14.182z"></path></svg>
      </button>
      <div className="pagination__text">
        {props.startMovieNum} - {props.endMovieNum} of {props.totalResults} movies
      </div>
      <button className={`pagination__btn ${props.loading || props.currentPage === props.totalNumOfPages ? "pagination__btn--disabled" : ""}`} onClick={props.nextPage}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg>
      </button>
    </div>
  );
};

export default Pagination;