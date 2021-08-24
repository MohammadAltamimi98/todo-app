import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './ToDo.scss';

import { v4 as uuid } from 'uuid';
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List'
import Pagination from '../pagination/pagination'

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(4);

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

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

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



  let indexOfLastTodo = currentPage * todosPerPage;

  let indexOfFirstTodo = indexOfLastTodo - todosPerPage;

  let currentTodos = list.slice(indexOfFirstTodo, indexOfLastTodo)
  let paginate = (pageNum) => {
    setCurrentPage(pageNum);
  }



  return (
    <>

      <Header />
      {list.length > 0 && <h3> - To Do List: {incomplete} items pending</h3>}
      <div className="form-list">
        <Form addItem={addItem} />
        <List list={list} toggleComplete={toggleComplete} />
        <Pagination todosPerPage={todosPerPage} totalTodos={list.length} paginate={paginate} />
      </div>
    </>
  );
};

export default ToDo;