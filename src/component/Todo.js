import React, { Component } from 'react'

class Todo extends Component {
    state = {
        database: [],
        input: ''
    }
    // menetapkan nilai baru sebagai input baru saat target {input} mengalami perubahan
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
        console.log(this.state.input)
    }

    addData = () => {
        const { database } = this.state
        const { input } = this.state
        database.push(input)
        localStorage.setItem('todos', JSON.stringify(database))
        this.setState({
            input: ''
        })
    }

    getData = () => {
        let getItem = JSON.parse(localStorage.getItem('todos'))
        this.setState({
            database: getItem
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <h1>Todolist</h1>
                <input type="text" onChange={this.handleChange} value={this.state.input} /> <br />
                <button onClick={() => this.addData()} type="submit">Submit</button>
                <ul>
                    {this.state.database.map(datab => { return <li>{datab}</li>; }

                    )}
                </ul>
            </div>
        )
    }
}

export default Todo