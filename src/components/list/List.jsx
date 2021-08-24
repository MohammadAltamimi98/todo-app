import Button from 'react-bootstrap/Button';
import './list.scss';


function List(props) {
  return (
    <div>
      {props.list.map(item => (
        <div key={item.id}>
          {console.log(item.id)}
          <h6>Todo Item: {item.text}</h6>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty ? item.difficulty : 3}</small></p>
          <div className="divdiv" onClick={() => props.toggleComplete(item.id)}><small>Complete: {item.complete ? "done" : "pending"}</small></div>
          <br />
          <Button variant='danger' onClick={() => props.deleteItem(item.id)}>Delete</Button>
          <hr />
        </div>
      ))
      }
    </div >
  )
}

export default List;
