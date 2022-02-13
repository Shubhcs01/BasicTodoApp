import React, { Component } from 'react'

export default class Todo extends Component {

    constructor() {
        super();
        //define state
        this.state = {
            tasks: [],
            currtask: '',
        }
    }

    //Function-1
    handelChange = (e) => {
        this.setState(
            { currtask: e.target.value }
        )
    }

    //Function-2
    handelSubmit = (e) => {
        this.setState(
            {
                //always create new array for updating
                tasks: [...this.state.tasks, { task: this.state.currtask, id: this.state.tasks.length + 1 }],
                currtask: ''
            }
        )
    }

    //Function-3
    handelDelete = (id) => {
        let narr = this.state.tasks.filter((taskObj) => {   //Not JSX
            return taskObj.id !== id
        })

        this.setState(
            {
                tasks: [...narr]
            }
        )
    }





    //Main Function
    render() {
        return (
            //define UI and connect with state
            <div>
                <input type="text" value={this.state.currtask} onChange={this.handelChange}></input>
                <button onClick={this.handelSubmit}>Submit</button>
                <ul>
                    {
                        this.state.tasks.map((taskObj) => (
                            <li key={taskObj.id}>
                                <h1>{taskObj.task}</h1>
                                <button onClick={() => this.handelDelete(taskObj.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
