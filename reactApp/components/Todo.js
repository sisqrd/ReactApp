
import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <ul>
               {this.props.task.map((task) => <li><button>X</button> 
               {task.completed ? <strike> {task.taskText} </strike> : task.taskText} </li>)}
            </ul>

        )
      }
    }



export default Todo;