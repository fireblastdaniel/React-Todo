import React from 'react';

const Todo = props => {
    return (
        <div onClick={props.toggleCompleted}>
            <p>{props.item.task}</p>
        </div>
    );
};

export default Todo;