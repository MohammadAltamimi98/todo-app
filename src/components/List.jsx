import React, { useContext, useState, useEffect } from 'react';
import './list.scss';
import { ListContext } from '../context/list';
import { Button, Card, Elevation, Switch } from '@blueprintjs/core';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function List() {
  const { list, toggleComplete } = useContext(ListContext);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const [filter, setFilter] = useState([]);
  const [number, setNumber] = useState(3);

  function next(num, length) {
    if (start + Math.abs(num) > length) return;
    setStart(start + num);
    setEnd(end + num);
  }

  function back(num) {
    if (start - Math.abs(num) < 0) return;
    setStart(start + num);
    setEnd(end + num);
  }

  function onlyIncomplete() {
    if (filter == list) setFilter(() => filter.filter((item) => item.complete != true));
    else setFilter(list);
  }

  function choose(e) {
    setNumber(Number(e.target.value));
    setEnd(Number(e.target.value));
    setStart(0);
  }

  function pagination(e) {
    setStart(Number(e.target.id) * number - number);
    setEnd(Number(e.target.id) * number);
  }

  useEffect(() => {
    setFilter(list);
  }, [list]);

  const pages = [];
  for (let i = 1; i <= Math.ceil(filter.length / number); i++) {
    pages[i] = i;
  }

  return (
    <div className="list-container">
      <Switch onClick={onlyIncomplete}>Only In-Complete</Switch>
      <div className="page-select">
        <Form.Label>Number of Item Displayed</Form.Label>
        <Form.Select onClick={choose} size="sm">
          <option disabled>Select One</option>
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
        </Form.Select>
      </div>

      <ul>
        {filter.slice(start, end).map((item) => {
          const deff = item.difficulty > 3 ? 'hard' : 'easy';
          return (
            <Card key={item.id} interactive={true} elevation={Elevation.ZERO} className="card">
              <h5>
                <span
                  className={
                    item.difficulty > 3
                      ? 'bp3-tag bp3-round bp3-intent-danger'
                      : item.difficulty == 3
                      ? 'bp3-tag bp3-round bp3-intent-warning'
                      : 'bp3-tag bp3-round bp3-intent-success'
                  }
                >
                  {deff}
                </span>
                <span> {item.assignee} </span>
              </h5>
              <p>{item.text}</p>
              <Button
                className={item.complete ? 'bp3-small bp3-outlined bp3-intent-success' : 'bp3-small bp3-outlined bp3-intent-danger'}
                onClick={() => toggleComplete(item.id)}
              >
                {item.complete ? 'Complete' : 'Incomplete'}
              </Button>
            </Card>
          );
        })}
      </ul>
      <div className="navigation">
        <Button icon="arrow-left" intent="success" outlined onClick={() => back(number * -1)} />
        <div className="nav-page">
          {pages.map((page) => (
            <Button key={`page-${page}`} id={page} intent="Primary" outlined onClick={pagination}>
              {page}
            </Button>
          ))}
        </div>
        <Button icon="arrow-right" intent="success" outlined onClick={() => next(number, filter.length)} />
      </div>
    </div>
  );
}

export default List;