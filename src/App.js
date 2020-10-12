import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.jsx'
import Schedule from './components/Schedule.jsx'
import AnimeDetail from './components/AnimeDetail.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path='/jikan-api-front/' component={Schedule} />
      <Route path='/jikan-api-front/anime/:id' render={({match:{params:{id}}})=>(<AnimeDetail id={id} />)} />
    </div>
  );
}

export default App;
