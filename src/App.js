import React, { Component } from 'react';
import NewTask from './components/NewTask/NewTask';
import TaskList from './components/TaskList/TaskList';
import './App.css';

class App extends Component {

  state = {
    tasks: [
      {
        id: 111111111,
        text: 'Task txt1',
        date: '2018-11-11',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: '222222222',
        date: '2019-02-20',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: '333333333333',
        date: '2019-01-22',
        important: false,
        active: true,
        finishDate: null
      },
      
    ]
  }
  render() {
    return (
      <div className="App">
          <NewTask />
          <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
