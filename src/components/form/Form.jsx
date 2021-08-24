import React, { useContext } from 'react';
import useForm from '../../hooks/form';
import { Button } from "@blueprintjs/core";
import { FormGroup, InputGroup, Intent, NumberRange, RangeSlider } from "@blueprintjs/core";
import './form.scss';


function Form(props) {
  const { handleSubmit, handleChange } = useForm(props.addItem);


  return (
    <div className="formdiv">
      <form className="form" onSubmit={handleSubmit}>

        <h1>Add ToDo Item</h1>

        <FormGroup
          label={"To Do Item"}
          labelFor="text-input"
        >
          <InputGroup id="text-input" placeholder="Placeholder text" onChange={handleChange} name="text" type="text" placeholder="Item Details" intent={Intent.PRIMARY} required />
        </FormGroup>


        <FormGroup
          label={"Assigned To"}
          labelFor="text-input"
        >
          <InputGroup id="text-input" onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" intent={Intent.PRIMARY} required />
        </FormGroup>


        <label >
          <span className="difficulty">Difficulty:</span>  <br />
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>


        <br />
        <br />

        <label>
          <Button type="submit">Add Item</Button>
        </label>
      </form>
    </div>
  )
}

export default Form;

