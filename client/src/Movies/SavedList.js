import React from 'react';
import { useHistory  } from 'react-router-dom';
export default function SavedList(props) {

  const history = useHistory();
  const routeHome = () => {
    history.push("/")
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      
      <div onClick={ routeHome } className="home-button">Home</div>
    </div>
  );
}
