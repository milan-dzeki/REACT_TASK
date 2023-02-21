import { useState, useEffect } from 'react';
import axios from 'axios';
import noPhoto from './images/NOPHOTO.jpg';
import Header from './components/Header';
import Filters from './components/Filters';
import SingleMovie from './components/SingleMovie';
import Spinner from './components/Spinner';
import Pagination from './components/Pagination';

const pageLimit = 20;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [moviesData, setMoviseData] = useState({
    results: [],
    currentPage: 1,
    totalResults: 0,
    totalNumOfPages: 0,
    category: "",
    startMovieNum: 0,
    endMovieNum: 0
  });

  const getMovies = async(category, page) => {
    setLoading(true);

    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}`);

      let startMovieNum = 1;
      let endMovieNum = pageLimit;

      if(page === 1) {
        startMovieNum = 1;

        if(data.total_pages === 1) {
          endMovieNum = data.total_results;
        }
        if(data.total_results > 1) {
          endMovieNum = pageLimit
        }
      } else if(page > 1 && page < data.total_pages) {
        startMovieNum = (page - 1) * pageLimit + 1;
        endMovieNum = startMovieNum + pageLimit - 1;
      } else {
        startMovieNum = (page - 1) * pageLimit + 1;
        endMovieNum = data.total_results; 
      }
      setMoviseData({
        results: data.results,
        currentPage: page,
        totalResults: data.total_results,
        totalNumOfPages: data.total_pages,
        category,
        startMovieNum,
        endMovieNum
      });
    } catch(error) {
      setError("Something went wrong. Try refreshing the page");
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies("now_playing", 1);
  }, []);

  const prevPage = () => {
    if(loading || moviesData.currentPage === 1) return;
    getMovies(moviesData.category, moviesData.currentPage - 1);
  };

  const nextPage = () => {
    if(loading || moviesData.currentPage === moviesData.totalNumOfPages) return;
    getMovies(moviesData.category, moviesData.currentPage + 1);
  };

  const getCategoryMovies = (category) => {
    if(loading || moviesData.category === category) return;
    getMovies(category, 1);
  };

  return (
    <>
      <Header />
      <main className="container">
        <Filters 
          category={moviesData.category}
          getCategoryMovies={getCategoryMovies} />
          <div className="movies">
          {
            loading
            ? <Spinner />
            : error
            ? <p className="error">{error}</p>
            : !loading && !error && moviesData.results.length === 0
            ? <p className="empty">No movies found</p>
            : moviesData.results.map(movie => {
              return (
                <SingleMovie
                  key={movie.id}
                  title={movie.original_title}
                  poster={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : noPhoto}
                  description={movie.overview}
                  rating={movie.vote_average} />
              );
            })
          }
        </div>
        <Pagination
          loading={loading}
          startMovieNum={moviesData.startMovieNum}
          endMovieNum={moviesData.endMovieNum}
          totalResults={moviesData.totalResults}
          currentPage={moviesData.currentPage}
          totalNumOfPages={moviesData.totalNumOfPages}
          prevPage={prevPage}
          nextPage={nextPage} />
      </main>
    </>
  );
}

export default App;
