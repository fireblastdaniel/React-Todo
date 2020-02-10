import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: []
    };
  }

  toggleCompleted = clickedID => {
    const newTodoList = this.state.todoList.map( item => {
      if(item.id === clickedID){
        return {
          ...item,
          complete: !item.complete
        };
      } else {
        return item;
      }
    });

    this.setState({
      todoList: newTodoList
    })
  };

  clearCompleted = e => {
    e.preventDefault();
    console.log(this.state.todoList)
    const newTodoList = this.state.todoList.filter( item => item.complete === false );
    console.log(newTodoList)
    this.setState({ todoList: newTodoList })
  }

  addNewItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      complete: false
    }

    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todoList} toggleCompleted={this.toggleCompleted} />
        <TodoForm addNewItem={this.addNewItem} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
