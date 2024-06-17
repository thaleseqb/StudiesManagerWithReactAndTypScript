import ITask from "../../../types/task"
import style from "../List.module.scss"

export default function item({task, time, selected, completed, id}: ITask) {
    console.log("item atual", {task, time, selected, completed, id})
    return (
        <li className={style.item}>
        <h3>{task}</h3>
        <span>{time}</span>
    </li>
    )
}