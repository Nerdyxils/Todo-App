import React from 'react'
import TodoItem from './TodoItem'
import todoData from './todoData'

function CheckBox (){
    const todobulk = todoData.map(item => <TodoItem key={item.id} item={item}/>)
    return (
    <main className="todo-list">
        {todobulk}
    </main>
    );
}
export default CheckBox
