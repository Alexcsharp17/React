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
      movies: moviesData
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

  render() {
    return (
      <div className="row m-1">
        <div className="col-8 d-flex justify-content-around flex-wrap">
          {this.state.movies.map(movie => (
            <MovieItem
              data={movie}
              deleteItem={this.deleteMovie}
              deleteMovie={this.deleteMovie}
              key={movie.id}
            />
          ))}
        </div>

        <div className="col-4" />
      </div>
    );
  }
}

export default App;
