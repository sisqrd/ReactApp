import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import Todo from './components/Todo';
import InputLine from './components/InputLine';
let dummyData = [{ taskText: "Laundry", completed: false },{ taskText: "Magic tricks", completed: true },{ taskText: "dish washing", completed: false }]






ReactDOM.render(<TodoApp list={dummyData}/>,
   document.getElementById('root'));
