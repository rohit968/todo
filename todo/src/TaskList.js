import React from 'react';

const TaskList = (props) => {

    return (

        <div className="flex flex-row justify-start items-center text-lg capitalize ">
            <li className={props.isComplete ? 'strikethrough w-4/5' : 'w-4/5'}>{props.task}</li>

            <div className=" flex flex-row justify-between w-1/5">
                <i className="fa fa-check-circle w3-xlarge cursor-pointer green" onClick={() => {
                    props.onComplete(props.id)
                }}>
                </i>
                <i className="fa fa-times-circle w3-xlarge cursor-pointer red" onClick={() => {
                    props.onSelect(props.id)
                }}></i>
            </div>
        </div>
    )
}

export default TaskList;