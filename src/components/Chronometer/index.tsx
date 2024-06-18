import Button from "../Button";
import Clock from "./Clock";
import style from "./Chronometer.module.scss"
import convertTime from "../../common/utils/date";

export default function Chronometer() {
    console.log("deve mostrar a conversão", convertTime("01:01:01"))
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card a inicie o cronometro</p>
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