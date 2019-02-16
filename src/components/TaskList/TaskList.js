import React from 'react';
import SingleTask from './SingleTask/SingleTask';

const TaskList = (props) => {
    // const tasks = props.tasks.map(task => <SingleTask 
    //     key={task.id} 
    //     task={task} 
    //     deleteTask={props.deleteTask} 
    //     changeTaskStatus ={props.changeTaskStatus}
    // />);

    const active = props.tasks.filter(task => task.active);
    const completed = props.tasks.filter(task => !task.active);

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
                <h2>Tasks to do ({activeTasks.length})</h2>
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
