import React from "react";
function Image(props) {
  return <img width="100%" src={props.src} alt={props.alt} />;
}
class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      like: false
    };
  }
  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };
  HandelLike = () => {
    this.setState({
      like: !this.state.like
    });
  };
  render(props) {
    const {
      data: {
        title,
        vote_average,
        poster_path,
        backdrop_path,
        overview,
        id,
        addMovieToWillWatch,
        deleteMovie
      }
    } = this.props;
    return (
      <div style={{ width: "250px" }} className="card mt-2 p-1">
        <Image
          src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`}
          alt={title}
        />
        <p className="card-title">Titile: {title}</p>
        <p>Rating: {vote_average}</p>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="d-flex flex-wrap"
        >
          <button
            type="button"
            className={
              this.state.show === true
                ? "btn btn-secondary m-1"
                : "btn btn-primary m-1"
            }
            onClick={this.toggleOverview}
          >
            {this.state.show === true ? "Hide" : "Show"}
          </button>

          <button
            type="button"
            className={"btn btn-danger m-1 border-dark "}
            onClick={() => {
              this.props.deleteMovie(id);
            }}
          >
            Delete
          </button>

          <button
            type="button"
            className={
              this.state.like === true
                ? "btn btn-success m-1"
                : "btn btn-light m-1 border-dark "
            }
            onClick={this.HandelLike}
          >
            {this.state.like === true ? "Disike" : "like"}
          </button>
          <button
            type="button"
            className="btn btn-dark w-100"
            onClick={() => {
              this.props.addMovieToWillWatch(id);
            }}
          >
            Will watch
          </button>
        </div>

        {this.state.show === true ? <p>{overview}</p> : null}
      </div>
    );
  }
}

export default MovieItem;
