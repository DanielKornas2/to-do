import React from 'react';

const SingleTask = (props) => {
    const { text, date, id, active, finishDate, important } = props.task;
      
    if (active){
        return ( 
            <div>
                <p>
                    <strong><span className={important ? "important" : null}>{text}</span></strong> - till <span>{date} </span>
                    <button onClick={() => props.changeTaskStatus(id)} >Done</button>
                    <button onClick={() => props.deleteTask(id)}>X</button>
                </p>    
            </div>
         );
    } else{
        const finishDateItem = new Date(finishDate).toDateString();
        return (
            <div>
                <p>
                    <strong>{text}</strong> <em><span>(till {date})</span></em>
                    <span> - task completed: {finishDateItem}</span>
                    <button onClick={() => props.deleteTask(id)}>X</button>
                </p>    
            </div>
        )
    }
    
}
 
export default SingleTask ;