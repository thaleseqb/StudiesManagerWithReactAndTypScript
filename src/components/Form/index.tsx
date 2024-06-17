import React from "react";
import Button from "../Button";
import style from "./Form.module.scss"

class Form extends React.Component {
    render() {
        return (
            <form className = {style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Adicine um novo estudo
                    </label>
                    <input type="text"
                    name="task"
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