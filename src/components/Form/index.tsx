import React from "react";
import Button from "../Button";

class Form extends React.Component {
    render() {
        return (
            <form action="">
                <div>
                    <label htmlFor="task">
                        Adicine um novo estudo
                    </label>
                    <input type="text"
                    name="task"
                    id="task"
                    placeholder="O que você deseja estudar" 
                    required/>
                </div>
                <div>
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
                <Button/>
            </form>
        )
    }
}

export default Form;