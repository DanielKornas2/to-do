import React from 'react';

const SingleTask = (props) => {
    const { text, date } = props.task;
    return ( 
        <div>
            <p>
                <strong>{text}</strong> - till <span>{date} </span>
                <button>Done</button>
                <button>X</button>
            </p>    
        </div>
     );
}
 
export default SingleTask ;