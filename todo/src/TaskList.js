import React from 'react';

const TaskList = (props) => {

    return (
        <div className="flex flex-row justify-start items-center">
            <li className="text-left flex items-center">{props.task}</li>
            <i class="fa fa-times-circle w3-xlarge flex justify-center items-center cursor-pointer hover:red-500" onClick={() => {
                props.onSelect(props.id)
            }}></i>
            <i class="fa fa-check-circle w3-xlarge flex justify-center items-center cursor-pointer hover:red-500" onClick={props.onDone}></i>
        </div>
    )
}

export default TaskList;