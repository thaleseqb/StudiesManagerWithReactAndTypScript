import Button from "../Button";
import Clock from "./Clock";
import style from "./Chronometer.module.scss"
import convertTime from "../../common/utils/date";
import ITask from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
    selected: ITask | undefined
}

export default function Chronometer({selected}: Props) {
    const [time, setTime] = useState<Number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(convertTime(selected?.time));            
        }
    }, [selected]);

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card a inicie o cronometro</p>
            <p>Tempo: {time?.toString()} </p>
            <div className={style.relogioWrapper}>
                <Clock

                />
            </div>
            <Button>
                Começar !
            </Button>
        </div>
    )
}