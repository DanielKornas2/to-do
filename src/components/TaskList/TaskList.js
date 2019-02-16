import React from 'react';
import SingleTask from './SingleTask/SingleTask';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    // Sort tasks by date
    active.sort((a, b) => a.date.localeCompare(b.date));
    
    const completed = props.tasks.filter(task => !task.active);
    // Sort tasks by name
    completed.sort((a, b) => a.text.localeCompare(b.text));

    const activeTasks = active.map(task => <SingleTask 
        key={task.id} 
        task={task} 
        deleteTask={props.deleteTask} 
        changeTaskStatus ={props.changeTaskStatus}
    />);

    const completedTasks = completed.map(task => <SingleTask 
        key={task.id} 
        task={task} 
        deleteTask={props.deleteTask} 
        changeTaskStatus ={props.changeTaskStatus}
    />);

    return ( 
        <React.Fragment>
            <div>
                <div>
                    <h2>Tasks to do ({activeTasks.length})</h2> 
                </div>
                {activeTasks.length > 0 ? activeTasks : "All tasks completed."}
            </div>

            <hr />
            <div>
                <h2>Completed ({completedTasks.length})</h2>
                {completedTasks}
            </div>
       </React.Fragment>
     );
}
 
export default TaskList ;
