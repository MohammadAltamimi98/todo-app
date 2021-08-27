import React, { useEffect, useState, useContext } from 'react';
import './ToDo.scss';
import { settingContext } from '../../context/settings';
import { v4 as uuid } from 'uuid';
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List'
import Pagination from '../pagination/pagination'
import Settings from '../settingsForm/settings'

const ToDo = () => {
  const context = useContext(settingContext);

  console.log(context.detectStorage);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(4);
  const [filteredList, setFilteredList] = useState([])

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


  useEffect(() => {
    setTodosPerPage(context.elementsPerPage);
  })

  useEffect(() => {
    if (context.showCompleted) {
      let InCompletedTasks = list.filter(item => !item.complete);
      console.log(InCompletedTasks);
      setFilteredList(InCompletedTasks);
    }
  }, [context.detectStorage])





  let indexOfLastTodo = parseInt(currentPage) * parseInt(todosPerPage);

  let indexOfFirstTodo = indexOfLastTodo - parseInt(todosPerPage);;

  let currentTodos = list.slice(indexOfFirstTodo, indexOfLastTodo)

  let paginate = (pageNum) => setCurrentPage(pageNum);




  return (
    <>
      <Header />
      {list.length > 0 && <h3> - To Do List: {incomplete} items pending</h3>}
      <div className="form-list">

        <Form addItem={addItem} />
        <Settings />
        {!context.showCompleted &&
          <List list={filteredList} toggleComplete={toggleComplete} deleteItem={deleteItem} />
        }

        {context.showCompleted &&
          <List list={currentTodos ? currentTodos : list} toggleComplete={toggleComplete} deleteItem={deleteItem} />}
        <Pagination todosPerPage={todosPerPage} totalTodos={list.length} paginate={paginate} />
      </div>
    </>
  );
};

export default ToDo;