import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
    const todos = useSelector((state) =>
        state.todos.filter((todo) => todo.completed)
    )
    return (
        <h4>{`${todos.length}개 완료`}</h4>
    );
};

export default TotalCompleteItems;