import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css'

const testList = [
  {
    task: 'Organize Garage',
    id: 123456789,
    complete: false
  },
  {
    task: 'Bake Cookies',
    id: 987654321,
    complete: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: testList
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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todoList} toggleCompleted={this.toggleCompleted} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
