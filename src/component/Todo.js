import React, { Component } from 'react'

class Todo extends Component {
    state = {
        database: [' satu', ' dua', ' tiga', ' empat'],
        input: ''
    }
    render() {
        return (
            <div>
                <h1>Todolist</h1>
                <input type="text" />
                <button type="submit">Submit</button>
                <ul>
                    {this.state.database.map(paramet => { return <li>{paramet}</li>; }

                    )}
                </ul>
            </div>
        )
    }
}

export default Todo