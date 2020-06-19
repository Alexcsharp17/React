import React from "react";
import MovieItem from "./MovieItem";
import { moviesData } from "../moviesData";

/*function RendMovies() {
  let arr = [];
  moviesData.forEach(element => {
    arr.push(<MovieItem data={element} />);
  });
  return arr;
}
*/
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
      movieswatch: []
    };
  }
  deleteMovie = id => {
    console.log(id);
    const updateMovies = this.state.movies.filter(item => item.id !== id);
    console.log(updateMovies);

    // this.state.movies = updateMovies;
    this.setState({
      movies: updateMovies
    });
  };
  addMovieToWillWatch = id => {
    const updWillWatch = [...this.state.movieswatch];
    const addWatchMovies = this.state.movies.filter(item => item.id === id);
    updWillWatch.push(addWatchMovies);
    this.setState({
      movieswatch: updWillWatch
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row m-1">
          <div className="col col-9">
            <div className="d-flex justify-content-around flex-wrap">
              {this.state.movies.map(movie => (
                <MovieItem
                  data={movie}
                  deleteItem={this.deleteMovie}
                  deleteMovie={this.deleteMovie}
                  addMovieToWillWatch={this.addMovieToWillWatch}
                  key={movie.id}
                />
              ))}
            </div>
          </div>

          <div className="col-3">
            <p>Will watch: {this.state.movieswatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
