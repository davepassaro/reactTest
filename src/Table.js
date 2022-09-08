import React, { useState } from "react";
import { useContextState } from "./App";

export default function Table() {

    const [tableOneIndex, setTableOneIndex, tableTwoIndex, setTableTwoIndex, APIData, setAPIData] = useContextState();

    let filteredAPIData = []
    APIData && APIData.forEach((item)=>{
          if (tableOneIndex.start <= item.id && item.id <= tableOneIndex.end){
            filteredAPIData.push(item);
          }
        });
    console.log(filteredAPIData,tableOneIndex,'fad')
    
    const handleSubmit = e => {
      e.preventDefault();
      console.log(e.target[0].value,e.target[1].value, 'hsub')
      setTableOneIndex({
        start:e.target[0].value, 
        end: e.target[1].value
      })
    };


  return (
    <div>
    <form onSubmit={handleSubmit}>
    <span>Starting Index</span>
    <input value={tableOneIndex.start} onChange={
      e => {
      setTableOneIndex(tableOneIndex =>(
          {...tableOneIndex, start: e.target.value}
        ))
      }} />
    <span>Ending Index</span>
    <input value={tableOneIndex.end} onChange={
      e => {
      setTableOneIndex(tableOneIndex =>(
          {...tableOneIndex, end: e.target.value}
        ))
      }} />
      <button>Submit</button>
  </form>
    <table className="table">
    <tbody>
      <tr>
        <th className="table-header">ID</th>
        <th >Title</th>
      </tr>

      {filteredAPIData.map(item => (
        <tr key={item.id}>
          <td> {item.id}</td>
          <td> {item.title} </td>
      </tr>
      ))}
      </tbody>
    </table>
     </div>
  );
}
