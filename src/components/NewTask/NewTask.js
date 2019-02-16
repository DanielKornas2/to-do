import React, { Component } from 'react';

class NewTask extends Component {
    state = { 
        text: '',
        important: false,
        // Slice 1st 10 charts - because I want 2020-02-20 date format
        date: new Date().toISOString().slice(0,10)
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheck = (e) => {
        this.setState({
            important: e.target.checked
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        const {text, important, date} = this.state;
        if (text.length > 0){
            this.props.addNewTask(text,important,date);
        } else {
            alert ("Task text can't be empty!")
        }
        
        this.setState({
            text: '',
            important: false,
            date: new Date().toISOString().slice(0,10)
        })
    }

    render() { 
        return (  
            <div>
                <h1>TO DO APP</h1>
                <form>
                    <input type="text" placeholder="What should you do?" value={this.state.text} onChange={this.handleText}/>
                    <input type="checkbox" value={this.state.important} id="important" onChange={this.handleCheck}/>
                    <label htmlFor="important">Priority</label>
                    <input type="date" value={this.state.date} onChange={this.handleDate} />
                    <button onClick={this.handleClick}>Add</button>
                 </form>
                <hr />
            </div>
        );
    }
}
 
export default NewTask;