// import React, { useContext, useState, useEffect } from 'react';
import './list.scss';


function List(props) {
  console.log(props.toggleComplete);
  return (
    <div>
      {props.list.map(item => (
        <div key={item.id}>
          {console.log(item.id)}
          <p>Todo Item: {item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty ? item.difficulty : 3}</small></p>
          <div className="divdiv" onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default List
