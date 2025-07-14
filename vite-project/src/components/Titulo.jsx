import { useState } from "react"


export default function Titulo({ cor }){
    const [texto, setTexto] = useState("Um título do estado inicial")
    const [inputText, setInputText] = useState("")

    function clicou(){
        setTexto(inputText)
    }

    return(
        <div>
           <h1 style={{color: cor}}>{texto}</h1>
           <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}} />
           <button onClick={clicou}>Mudar</button>
        </div>
    )
}
