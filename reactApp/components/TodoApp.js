import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';

let dummyData = [{ taskText: "Laundry", completed: false },{ taskText: "Magic tricks", completed: true },{ taskText: "dish washing", completed: false }]

class TodoApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            milk: []
        }
    }

    componentDidMount(){
        this.setState={
            milk: this.props.list
        }
    }

    render(){
        return(
            <div>
                <InputLine/>
                <TodoList listing={this.props.list} harry={this.state.milk}/> 
            </div> 
            
        )
    }
}


export default TodoApp;