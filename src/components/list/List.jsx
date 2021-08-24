import Button from 'react-bootstrap/Button';
import './list.scss';


function List(props) {
  console.log(props.toggleComplete);
  return (
    <div>
      {props.list.map(item => (
        <div key={item.id}>
          {console.log(item.id)}
          <p>Todo Item: {item.text}</p>
          <p>Assigned to: {item.assignee}</p>
          <p>Difficulty: {item.difficulty ? item.difficulty : 3}</p>
          <div className="divdiv" onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()
          }</div>
          <br />

          <Button variant='danger' onClick={() => props.deleteItem(item.id)}>Delete</Button>
          <hr />
        </div>
      ))
      }
    </div >
  )
}

export default List
