import React from 'react';
import './App.css';
import MediaCard  from './components/cards';
import CardSelected from './components/cardSelected';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom" 
import ButtonAppBar from './components/navbar';


function App() {

  return (
    <Router>
    
    <div className="App">
     
    <ButtonAppBar></ButtonAppBar>
      <Routes>
        <Route path='/' element={<MediaCard></MediaCard>}> </Route>  
        <Route path="/character/:id" element={ <CardSelected ></CardSelected>}></Route>

            
      </Routes>

    </div>
    </Router>
  );
}

export default App;
