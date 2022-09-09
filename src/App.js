import './App.css';
import React, {useState, useEffect, useContext} from 'react';
import Table from "./Table";
import { BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import Navbar from "./Navbar";

const FilterContext = React.createContext([]);

function useContextState() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error(
      "context must be used within a Provider"
    );
  }
  return context;
}

function App() {

  const [toggleTable, setToggleTable] = React.useState(false);
  const [tableOneIndex,setTableOneIndex] = useState({start: 1, end: 1});
  const [tableTwoIndex,setTableTwoIndex] = useState({start: 2, end: 2});
  const [APIData, setAPIData] = useState();

  useEffect(() => {
    // Fetch on app start
    (async function() {
      try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos'
        );
        const json = await response.json();
        setAPIData(json);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="App">
     <Navbar/>
      <div>
      <button onClick={()=>
        setToggleTable(prevToggleTable=>{return !prevToggleTable})}>Switch Tables</button>
      </div>
      <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home/>
      </Route>
      <Route exact path="/table">
      <FilterContext.Provider value={
        [
          tableOneIndex, setTableOneIndex, 
          tableTwoIndex, setTableTwoIndex, 
          APIData, setAPIData, 
          toggleTable
        ]
        }>
        <Table />
      </FilterContext.Provider>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export {
  App,
  useContextState
};
