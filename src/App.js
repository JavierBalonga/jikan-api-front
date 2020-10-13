import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.jsx'
import Schedule from './components/Schedule.jsx'
import AnimeDetail from './components/AnimeDetail.jsx'

export default function App() {
  return (
    <div className="App">
      <Route exact path='/jikan-api-front/' component={Schedule} />
      <Route path='/jikan-api-front/anime/:id' render={({match:{params:{id}}})=>(<AnimeDetail id={id} />)} />
      <NavBar/>
    </div>
  );
}