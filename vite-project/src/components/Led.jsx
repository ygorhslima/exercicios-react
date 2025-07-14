import ledVerde from '../assets/led-verde.png'
import ledVermelho from '../assets/led-vermelho.png'

export default function Led(props){
    return (
        <>
            <img style={{width:'40px'}} src={props.ligado?ledVerde:ledVermelho} />
            <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?'desligar':'ligar'}</button>
        </>
    )
}