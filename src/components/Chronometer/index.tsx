import Button from "../Button";
import Clock from "./Clock";
import style from "./Chronometer.module.scss"

export default function Chronometer() {
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