
import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Todo task={this.props.listing}/>
        )
    }
}

export default TodoList;