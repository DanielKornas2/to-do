import React from 'react';
import SingleTask from './SingleTask/SingleTask';

const TaskList = () => {
    return ( 
        <div>
            Lista zadań
            <SingleTask />
            <SingleTask />
            <SingleTask />
        </div>
     );
}
 
export default TaskList ;
