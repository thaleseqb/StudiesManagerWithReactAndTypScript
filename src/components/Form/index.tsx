import React from "react";
import Button from "../Button";
import style from "./Form.module.scss"

class Form extends React.Component {
    state = {
        task:"",
        time:"00:00"
    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("state", this.state);
    }

    render() {
        return (
            <form className = {style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Adicine um novo estudo
                    </label>
                    <input type="text"
                    name="task"
                    value={this.state.task}
                    onChange={event => this.setState({...this.state , task: event.target.value})}
                    id="task"
                    placeholder="O que você deseja estudar" 
                    required/>
                </div>
                <div className={style.inputContainer}>
                    <label >
                        Tempo
                    </label>
                    <input type="time"
                    step="1"
                    name="time"
                    value={this.state.time}
                    onChange={event => this.setState({...this.state, time: event.target.value})}
                    id="time"
                    min="00:00:00"
                    max="00:01:30"
                    required />
                </div>
                <Button>
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form;