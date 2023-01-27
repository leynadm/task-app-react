import './App.css';
import { Component } from 'react';
import React from 'react';
import { Overview } from './components/Overview';

class App extends Component {

  constructor(props){
    super(props);
    this.onClickBtn = this.onClickBtn.bind(this)
    this.state = {value: '',tasksArr:[]};
  }

  onClickBtn(){
    if(this.state.value !== ''){
      this.setState({tasksArr:[...this.state.tasksArr,this.state.value]});
    }
  }

  handleChange=(event)=> {
    this.setState({value: event.target.value});
  }

  render(){
    return (
    
      <div>
        <label>Add Task</label>
        <input type="text" className='inputTask' value={this.state.value} onChange={this.handleChange}></input> 
        <button type='button' onClick={this.onClickBtn}>Add Task</button>
        <Overview tasksArr={this.state.tasksArr}/>
      </div>
    );
  }
}

export default App;