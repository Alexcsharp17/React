import React from "react";
import { moviesData } from "../moviesData";

function Image(props){
  return(
    <img width="100%" src={props.src} alt={props.alt} />
  )
}
class MovieItem extends React.Component{
 constructor(){
   super();
   this.state={
     show: false,
     like:false
   };
 }
 toggleOverview = () =>
 {
   this.setState({
     show: !this.state.show
   });}
   HandelLike = () =>
 {
   this.setState({
     like: !this.state.like
   });}
  render(props){
    const {
      data: { title, vote_average, poster_path,backdrop_path, overview }
    } = this.props;
    return(
      <div style={{width:"200px"}}>
      <Image src={`https://image.tmdb.org/t/p/w500${backdrop_path ||
            poster_path}`} alt={title} />
      <p>Titile: {title}</p>
      <p>Rating: {vote_average}</p>
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <button type="button" className={this.state.show===true?"btn btn-secondary m-1":"btn btn-primary m-1"}  
      onClick={this.toggleOverview} > {this.state.show===true? "Hide":"Show"}</button>

      <button type="button" className={this.state.like===true?"btn btn-success m-1":"btn btn-light m-1 border-dark "}  onClick={this.HandelLike}>
      {this.state.like===true? "Disike":"like"}</button>
      </div>
      
      {this.state.show===true ? <p>{overview}</p>: null}
    </div>
    );
  }
}


function RendMovies(){
  moviesData.forEach(element => {
    console.log(element)
   return <MovieItem data={element} />;
  });

}
let i=1;
function App() {
  return (
    <div className="row m-1">
      <div className="col-8 d-flex justify-content-around">
      {for(i=1; i<5;i++){

      }}
      </div>
      
      <div className="col-4"></div>
    
    </div>
  );
}

export default App;
