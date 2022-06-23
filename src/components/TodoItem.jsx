import React from 'react';
import { useDispatch } from 'react-redux';
import { changeComplete, deleteTodo } from '../todo/tdooSlice';

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();
    const handleCompleteClick = () => {
        dispatch(changeComplete({ id, completed: !completed }));
    }
    const handleDelete = () => {
        dispatch(deleteTodo({ id }));
    }
    return (
        <li>
            <div>
                <span>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={handleCompleteClick}
                    ></input>
                    {title}
                </span>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;