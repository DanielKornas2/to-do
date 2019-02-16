import React from 'react';
import SingleTask from './SingleTask/SingleTask';

const TaskList = (props) => {
    const tasks = props.tasks.map(task => <SingleTask 
        key={task.id} 
        task={task} 
        deleteTask={props.deleteTask} 
        changeTaskStatus ={props.changeTaskStatus}
    />);
    
    return ( 
        <div>
            <h2>Tasks to do</h2>
            {tasks}
           
        </div>
     );
}
 
export default TaskList ;
