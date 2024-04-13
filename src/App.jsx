import { useState } from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import CreateCharacter from "./pages/CreateCharacter";
import ViewGallery from "./pages/ViewGallery";
import Home from "./pages/Home";
import EditCharacter from './pages/EditCharacter';
import ViewDetail from './pages/ViewDetail';


const App = () =>{

  return (
      <div className="container">

        <div className='navbar'>
          <div className='title'>CrewCrafter</div>

          <Link to="/"><button className="headerBtn"> Home </button></Link>
          <Link to="/create-new"><button className="headerBtn"> create New Character </button></Link>
          <Link to="/view-gallery"><button className="headerBtn"> View Gallery </button></Link>
        </div>



        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/create-new" element={<CreateCharacter/>}/>
          <Route path="/view-gallery" element={<ViewGallery/>}/>
          <Route path="/edit-character/:id" element={<EditCharacter/>}/>
          <Route path="/view-detail/:id" element={<ViewDetail/>}/>
        </Routes>
      </div>
  );
}

export default App;
