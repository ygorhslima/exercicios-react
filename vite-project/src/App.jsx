
import { useState } from 'react'

import Dados from './components/Dados'
import Numero from './components/Numero'
import Led from './components/Led'
import Titulo from './components/Titulo'
import Carro from './components/Carro'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Globais from './components/Globais'

function App() {
    function somar(n1,n2){
        return n1+n2
    }

    const [num, setNum] = useState(0)
    const [ligado, setLigado] = useState(false)

    const [carro,setCarro] = useState(true)
    const mostrarOcultarCarro=()=>{
      setCarro(!carro)
    }

    const [resumo, setResumo] = useState(Globais.resumo)

    const gravarResumo = () =>{
      Globais.resumo = resumo
    }
    const verResumo = ()=>{
      window.alert(Globais.resumo)
    }

  return (
    <>
      <Header/>
      <Main>
        <div>
          <Dados nome={"Ygor henrique"} idade={19} curso={"ADS"} somar={somar}/>
          <Numero num={num} setNum={setNum}/>
          <Led ligado={ligado} setLigado={setLigado}/>
          <Titulo cor="#a0f" />
        </div>


        <h1>Componente de classe</h1>
        {carro ? <Carro fator={10}/> : ''}
        <button onClick={()=>mostrarOcultarCarro()}>Ocultar</button>
        <div>
          <p>Canal: {Globais.canal}</p>
          <p>Curso: {Globais.curso}</p>
          <p>ano: {Globais.ano}</p>
        </div>
 
        <hr />
 
        <input type="text" name="resumo" id="resumo"  value={resumo} onChange={(e)=>setResumo(e.target.value)}/>
        <button onClick={gravarResumo}>Gravar</button>
        <button onClick={verResumo}>Ver</button>
      </Main>
      <Footer/>
    </>
  )
}

export default App
