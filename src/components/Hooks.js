import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Class Component
export class Counter extends React.Component {

    state = {
        count: 0
    };

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} many times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click Me</button>
            </div>
        )
    }
}

// Functional Component W/ Hooks
export const HooksCounter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Tayte');

    return (
        <div>
            <p>You clicked {count} many times</p>
            <p>{name}</p>
            <button onClick={() => setCount(count + 1)}>Hooks Click Me</button>
        </div>
    )
};

// Functional Component using useEffect
export const Todo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTodos(response.data);
            })
            .catch(err => {
                if(err) throw err;
            });
    }, [])

    return (
        <div>
            {
                todos.map(todo => <h1>{todo.title}</h1>)
            }
        </div>
    )
}