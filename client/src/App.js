import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Route, Link, Switch } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default function App (props) {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(res => {
          // Study this response with a breakpoint or log statements
          console.log("this is movies data", res.data)
          setMovieList(res.data);
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>
        <Link to="/"> </Link>
        <Link to="/movies"></Link>
      </div>


      <Switch>
        <Route path={ `/:id` }>
          <Movie/>
        </Route>

          <Route path="/">
            <MovieList movies={ movieList }/>
          </Route>
      </Switch>
    </div>
  );
}
