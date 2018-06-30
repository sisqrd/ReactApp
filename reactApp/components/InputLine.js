
import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <form>
                <input type ='text' value=""/>
                <input type="submit" value="Add todo"/>
                </form>
            </div> 
        )
    }
}

export default InputLine;