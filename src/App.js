import logo from './logo.svg';
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

  //const filterContextArray = React.createContext([]);
  //const [isOpen, setIsOpen] = React.useState(false);
  //const [tableData, setTableData] = React.useState(false);
  const [inputValue, setValue] = useState("");
  const [tableOneIndex,setTableOneIndex] = useState({start: 1, end: 1});
  const [tableTwoIndex,setTableTwoIndex] = useState({start: 1, end: 1});
  const [APIData, setAPIData] = useState();

  
  useEffect(() => {
    (async function() {
      try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos'
        );
        const json = await response.json();
        setAPIData(json)//json.data.map(it => it.data));
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);




  // React.useEffect(()=>{
  //   async function fetchMyAPI() {
  //     let response = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     response = await response.json();
  //     console.log(response)
  //     setTableData(response);
  //   }
  //   fetchMyAPI();
  //   console.log( tableData, 'td')
  // },[]);

  // function toggleAppOpen() {
  //   setIsOpen(prevIsOpen => !prevIsOpen);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Test
        </p>
      </header>
      <div>
      { 
      /* {toggleTable ?
          <appContext.Provider value={[filterContextArray]}>
          {children}
        </appContext.Provider> :
        <div className='startAppButtonParent'><button id="openButton" onClick={toggleAppOpen}>Switch Tables</button></div> */
        }
      </div>

      <FilterContext.Provider value={
        [
          tableOneIndex, setTableOneIndex, 
          tableTwoIndex, setTableTwoIndex, 
          APIData, setAPIData
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
