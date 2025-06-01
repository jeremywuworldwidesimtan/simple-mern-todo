import { useEffect, useState } from "react";
import Todo from "./todo";

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3200/api/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <>
            <div className='bg-blue-600 text-white p-4'>
                <h1 className='text-center font-bold text-3xl'>to-do list</h1>
            </div>
            <button onClick={() => window.location.href = "/add" } className='bg-blue-600 text-white m-4 p-2'>Add</button>
            <div>
                {todos.map((todo) => (
                    <Todo key={todo._id} todo={todo} />
                ))}
            </div>
        </>
    )
}