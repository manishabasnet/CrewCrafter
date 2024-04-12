import { useState } from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import CreateCharacter from "./pages/CreateCharacter";
import ViewGallery from "./pages/ViewGallery";
import Home from "./pages/Home";
import EditCharacter from './pages/EditCharacter';

const App = () =>{

  return (
      <div>
        <h1>CrewCrafter</h1>
        <Link to="/"><button className="headerBtn"> Home </button></Link>
        <Link to="/create-new"><button className="headerBtn"> create New Character </button></Link>
        <Link to="/view-gallery"><button className="headerBtn"> View Gallery </button></Link>


        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/create-new" element={<CreateCharacter/>}/>
          <Route path="/view-gallery" element={<ViewGallery/>}/>
          <Route path="/edit-character/:id" element={<EditCharacter/>}/>
        </Routes>
      </div>
  );
}

export default App;
