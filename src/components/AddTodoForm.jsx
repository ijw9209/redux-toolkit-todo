import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todo/tdooSlice';


const AddTodoForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo({ title: value }));
        console.log('user entered : ' + value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label >Name</label>
            <input
                type="text"
                placeholder='add todo'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>
            <button type="submit">submit</button>
        </form>
    );
};

export default AddTodoForm;