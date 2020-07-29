import React from 'react';
import { removeToDo } from '../actions/todos';
import { connect } from 'react-redux';

class ToDo extends React.Component{

    deleteToDo = () =>
    {
        const id = this.props.uniqueId;
        console.log( id ); //check if we got it.
        //Tell the reducer to do its magic!
        this.props.dispatch( removeToDo( id ) );
    }
    render()
    {
        return ( 
            <li>
                <input type ="checkbox" onClick = {this.deleteToDo} value = {this.props.key}/>
                {this.props.text}
            </li>
        );
    }
}
export default connect(
    null
)(ToDo);