import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import StarWarsForm from './components/StarWarsForm';
import React, {useState} from 'react';
import StarWarsCard from './components/StarWarsCard';
import StarWarsError from './components/StarWarsError';

function App() {
  const [urlObj, setUrlObj] = useState({
    category: "people",
    id: 1
  });

  return (
    <div className="App">
      <BrowserRouter>
      <StarWarsForm urlObj={urlObj} setUrlObj={setUrlObj}/>
        <Switch>
          <Route path="/:category/:id">
            <StarWarsCard urlObj={urlObj}/>
          </Route>
          <Route exact path={"/error"}> 
            <StarWarsError />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
