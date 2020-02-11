import React from 'react';

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state= {
            newItem: ''
        };
    }

    handleChange = e => {
        this.setState({
            newItem: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewItem(this.state.newItem);
        this.setState({ newItem: '' });
    };
    render() {
        return (
            <form className='todo-form'>
                <input 
                    type='text' 
                    placeholder='new todo item' 
                    name='newItem' 
                    value={this.state.newItem} 
                    onChange={this.handleChange}
                    className='new-item-input'
                ></input>
                <input 
                    type='submit' 
                    onClick={this.handleSubmit}
                    className='add-item-btn'
                ></input>
                <button 
                    type='button' 
                    onClick={this.props.clearCompleted}
                    className='clear-completed-btn'
                >Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;