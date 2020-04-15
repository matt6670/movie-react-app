import React from 'react';
import './App.css';
import Info from './components/Info';
import Title from './components/Title';

const film = {
  titleFilm : 'My Prop Film Statless',
  infoFilm: 'My Prop Info Statless bla blab bla bla'
}


const filmApi = async function(){
  fetch("http://www.omdbapi.com/?i=tt3896198&apikey=3a4b6a6d&t=The+notebook")
    .then(response => response.json())
    .then(response => console.log(response.Title) )
} 
filmApi()


function App() {

  return (
    <div className="App">
    <h1></h1>
     <Title title={film.titleFilm} />
     <Info info = {film.infoFilm}/>
    </div>
  );
}

export default App;
