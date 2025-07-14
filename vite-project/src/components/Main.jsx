import { useState } from 'react'
import './style/main.css'

import Dados from './Dados'
import Numero from './Numero'
import Led from './Led'
import Titulo from './Titulo'


export default function Main(){

    /**criando um estilo css */
    const destaqueTexto = {
        color: '#00f',
        fontSize:'2em',
    }


    const n = "Ygor henrique"
    const i = "19"
    const c = "ADS"

    function somar(n1,n2){
        return n1+n2
    }

    const [num, setNum] = useState(0)
    const [ligado, setLigado] = useState(false)

    return(
        <main>
            <section>
                <h1 style={destaqueTexto}>Lorem</h1>
                <p style={{color:'green'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis obcaecati, inventore esse</p>
            </section>

            <p>Valor do state num em app: {num}</p>

            <Dados nome={n} idade={i} curso={c} somar={somar}/>
            
            <Numero num={num} setNum={setNum}/>
            <Led ligado={ligado} setLigado={setLigado}/>


            <Titulo cor="#a0f" />
            <Titulo cor="#9a6" />
            <Titulo cor="#f54" />
            <Titulo cor="#4f3" />


        </main>
    )
}
