import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Title from './components/Title';



class App extends React.Component{
  constructor(props){
    super(props);

    this.state = { selectedMovie: null }
    this.state = { count: 0 }
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  
  handleChange = (event) => {
    let newValue = event.target.value
    this.setState({value: newValue});
  }

   handleSubmit(event) {
  //   alert('An search was submitted: ' + this.state.value);
    event.preventDefault();
    this.getMovieData();
  }

  componentDidMount(){
    this.getMovieData();

  }

  getMovieData = () => {

    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=3a4b6a6d&t=' + this.state.value) 
     .then(response => response.json())
     .then(result => this.setState(
      {
        selectedMovie: result
    
      },
      () => console.log('SetState Completed', this.state.selectedMovie)

    ));
  };

  likesCounter = () => {
    console.log('testing Likes')
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render(){
    const { selectedMovie, value } = this.state;
    if(!selectedMovie){
      return <div>No movie...</div>
    }else{
      return(
        <div>
          <Navbar />
            <form onSubmit={this.handleSubmit}>
              <input type="text"  placeholder="Search" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" class="btn btn-primary" />
            </form>
            <br />
          <Title title={this.state.selectedMovie.Title}  image={this.state.selectedMovie.Poster}/>
          <Info rating={this.state.selectedMovie.imdbRating} release_year = {this.state.selectedMovie.Year} />
          <button onClick={this.likesCounter}> Like {this.state.count} </button>        
       </div>
      ) 
    }
  }
}

export default App;
