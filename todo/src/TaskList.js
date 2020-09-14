import React, { useState } from 'react';

const TaskList = (props) => {

    const [line, setLine] = useState(false);

    const doneTask = () => {
        setLine(true);
        };

    return (
        <div className="flex flex-row justify-between items-center">
            <li style = {{textDecoration : line ? "line-through" : "none"}}>{props.task}</li>

            <div className="inline flex flex-row justify-between">
                <i className="fa fa-check-circle w3-xlarge cursor-pointer hover:red-500" onClick={doneTask}>
                </i>
                <i className="fa fa-times-circle w3-xlarge cursor-pointer hover:red-500" onClick={() => {
                    props.onSelect(props.id)
                }}></i>
            </div>
        </div>
    )
}

export default TaskList;