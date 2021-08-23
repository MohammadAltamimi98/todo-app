import React, { useEffect, useState } from 'react';
// import useForm from '../../hooks/form.js';

import { v4 as uuid } from 'uuid';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  function addItem(item) {
    let details = {
      id: uuid(),
      complete: false,
      difficulty: item.difficulty,
      assignee: item.assignee,
      text: item.text
    }

    setList([...list, details]);
  }

  // function deleteItem(id) {
  //   const items = list.filter(item => item.id !== id);
  //   setList(items);
  // }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>

      <Header />
      <h1>To Do List:{incomplete} items pending</h1>

      <Form addItem={addItem} />
      <List list={list} toggleComplete={toggleComplete} />
      {/* {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))} */}

    </>
  );
};

export default ToDo;