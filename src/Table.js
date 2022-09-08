import React, { useState } from "react";
import { useContextState } from "./App";

export default function Table() {

    const [tableOneIndex, setTableOneIndex, tableTwoIndex, setTableTwoIndex, APIData, setAPIData, toggleTable] = useContextState();

    const handleSubmit = e => {
      e.preventDefault();
      console.log(e.target[0].value,e.target[1].value, 'hsub')
      setTableOneIndex({
        start:e.target[0].value, 
        end: e.target[1].value
      })
    };
    const currentStartIndex = toggleTable ? tableTwoIndex.start : tableOneIndex.start  ;
    const currentEndIndex = toggleTable ? tableTwoIndex.end : tableOneIndex.end  ;
    

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <span>Starting Index</span>
    <input type="number" value={currentStartIndex} onChange={
      e => {
        toggleTable ?
        setTableTwoIndex(tableTwoIndex =>(
          {...tableTwoIndex, start: e.target.value}
        ))
        :
      setTableOneIndex(tableOneIndex =>(
          {...tableOneIndex, start: e.target.value}
        ))
      }} />
    <span>Ending Index</span>
    <input type="number" value={currentEndIndex} onChange={
      e => {
        toggleTable ?  
      setTableTwoIndex(tableTwoIndex =>(
        {...tableTwoIndex, end: e.target.value}
      ))
    :
      setTableOneIndex(tableOneIndex =>(
          {...tableOneIndex, end: e.target.value}
        ))
      }} />
  </form>
    <table className="table">
    <tbody>
      <tr>
        <th className="table-header">ID</th>
        <th >Title</th>
      </tr>

      {APIData && APIData.filter(item =>{
        console.log(currentStartIndex,currentEndIndex,'cse', (currentStartIndex<= item.id),( currentEndIndex >= item.id), item.id)
          return (currentStartIndex<= item.id && currentEndIndex >= item.id)})
        .map(item => (
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
