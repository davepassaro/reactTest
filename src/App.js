import './App.css';
import React, {useState, useEffect, useContext} from 'react';
import Table from "./Table";

const FilterContext = React.createContext([]);

function useContextState() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error(
      "useTicketDataState must be used within a TicketDataProvider"
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
      <header className="App-header">
        <p>
          React Test
        </p>
      </header>
      <div>
      <button onClick={()=>
        setToggleTable(prevToggleTable=>{
          return !prevToggleTable})}>Switch Tables</button>
      </div>

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
    </div>
  );
}

export {
  App,
  useContextState
};
