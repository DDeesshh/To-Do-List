export function Item({ task, deleteTaskById, updateTask }) {

  return (

    <li className="list-group-item" >
      <div className="d-flex justify-content-between align-items-center">

        <p style={{textDecoration : task.status.data == 1 ? "line-through" : "none"}}>{task.text}</p>
        <div>
          <button className="btn btn-outline-success"
            onClick={() => updateTask(task)}>Выполнено</button>

          <button className="btn btn-outline-danger m-2"
            onClick={() => deleteTaskById(task.id)}>Удалить</button>
        </div>
      </div>
    </li>
  )
}



