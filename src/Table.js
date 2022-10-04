import React from "react";
import { useLocation } from "react-router-dom";
import { useContextState } from "./App";
export default function Table() {
  const [
    tableOneIndex,
    setTableOneIndex,
    tableTwoIndex,
    setTableTwoIndex,
    APIData,
    setAPIData,
    toggleTable,
  ] = useContextState();

  const location = useLocation();
  const inTableOne = location.pathname === "/table/1";
  const currentStartIndex = inTableOne
    ? tableOneIndex.start
    : tableTwoIndex.start;
  const currentEndIndex = inTableOne ? tableOneIndex.end : tableTwoIndex.end;

  const handleSubmit = (e) => {
    e.preventDefault();
    inTableOne
      ? setTableOneIndex({
          start: e.target[0].value,
          end: e.target[1].value,
        })
      : setTableTwoIndex({
          start: e.target[0].value,
          end: e.target[1].value,
        });
  };

  return (
    <div className="tableParent">
      <h1 className="TablePageItems">Table {inTableOne ? " One" : " Two"}</h1>
      <form onSubmit={handleSubmit}>
        <span className="TablePageItems">Starting Index</span>
        <input
          type="number"
          value={currentStartIndex}
          onChange={(e) => {
            inTableOne
              ? setTableOneIndex((tableOneIndex) => ({
                  ...tableOneIndex,
                  start: e.target.value,
                }))
              : setTableTwoIndex((tableTwoIndex) => ({
                  ...tableTwoIndex,
                  start: e.target.value,
                }));
          }}
        />
        <br />
        <span className="TablePageItems">Ending Index</span>
        <input
          type="number"
          value={currentEndIndex}
          onChange={(e) => {
            inTableOne
              ? setTableOneIndex((tableOneIndex) => ({
                  ...tableOneIndex,
                  end: e.target.value,
                }))
              : setTableTwoIndex((tableTwoIndex) => ({
                  ...tableTwoIndex,
                  end: e.target.value,
                }));
          }}
        />
      </form>
      <table className="table">
        <tbody>
          <tr>
            <th className="table-th">ID</th>
            <th>Title</th>
          </tr>

          {APIData &&
            APIData.filter((item) => {
              return currentStartIndex <= item.id && currentEndIndex >= item.id;
            }).map((item) => (
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
