import React, { useContext } from 'react';
import { FormGroup, InputGroup, Switch, Intent, H1, Slider } from '@blueprintjs/core';
import { ToDoListContext } from '../context/context';

function Form(props) {
  const [handleSubmit, handleChange] = useForm(ToDoListContext);
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <H1>Add To Do Item</H1>

        <FormGroup>
          <span>To Do Item</span>
          <InputGroup onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </FormGroup>

        <FormGroup>
          <span>Assigned To</span>
          <InputGroup onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </FormGroup>

        <FormGroup>
          <span>Difficulty</span>
          <InputGroup onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </FormGroup>

        <FormGroup>
          <button type="submit">Add Item</button>
        </FormGroup>
      </form>
    </div>
  )
}

export default Form;
