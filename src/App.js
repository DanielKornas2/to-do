import React, { Component } from 'react';
import NewTask from './components/NewTask/NewTask';
import TaskList from './components/TaskList/TaskList';
import './App.css';

class App extends Component {

  state = {
    tasks: [
      {
        id: 0,
        text: 'Task txt1',
        date: '2018-11-11',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: '1111111',
        date: '2019-02-20',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: '22222222',
        date: '2019-01-22',
        important: false,
        active: true,
        finishDate: null
      }
    ]
  }

  changeTaskStatus = (id) => {
    const newTasks = [...this.state.tasks];
    newTasks.forEach(
      task => {
        if (task.id === id){
          task.active = false;
          task.finishDate = new Date().getTime();
        }
      }
    )
    this.setState({
      tasks: newTasks
    })
  }

  deleteTask = (id) => {
 
    const newTasks = [...this.state.tasks];
    const index = newTasks.findIndex(task => task.id === id);
    newTasks.splice(index,1);
    this.setState({
      tasks: newTasks
    })

  }

  render() {
    return (
      <div className="App">
          <NewTask />
          <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} changeTaskStatus ={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
