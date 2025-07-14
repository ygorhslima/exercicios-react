
import { useState,useEffect } from 'react'

import Dados from './components/Dados'
import Numero from './components/Numero'
import Led from './components/Led'
import Titulo from './components/Titulo'


import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

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

    // State de objeto
    const [form, setForm] = useState({
        "nome":"",
        "curso":"",
        "ano":""
    })

    //usado quando a página é montado e atualizado
    const [contagem,setContagem] = useState(0)
    useEffect(()=>{
      console.log("página atualizado")
      document.title = "contagem: " + contagem
    })

    const handleFormChange = (e)=>{
        if(e.target.getAttribute('name') == 'fnome'){
            setForm({"nome":e.target.value,"curso":form.curso,"ano":form.ano})
        }
        else if(e.target.getAttribute('name') == 'fcurso'){
            setForm({"nome":form.nome,"curso":e.target.value,"ano":form.ano})
        }
        else if(e.target.getAttribute('name') == 'fano'){
            setForm({"nome":form.nome,"curso":form.curso,"ano":e.target.value})
        }
    }


    //LOCAL STORAGE
    const [nome_storage,setNomeStorage] = useState()
    const armazenar=(chave,valor)=>{
      localStorage.setItem(chave,valor)
    }
    const consultar=(chave)=>{
      alert(localStorage.getItem(chave))
    }
    const apagar=(chave)=>{
      localStorage.removeItem(chave)
    }

  return (
    <>
      <Header/>
      <Main>
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


        <label>Nome</label>
        <input type="text" name="fnome" value={form.nome} onChange={(e)=>handleFormChange(e)}/><br />

        <label>curso</label>
        <input type="text" name="fcurso" value={form.curso} onChange={(e)=>handleFormChange(e)}/><br />

        <label>Ano</label>
        <input type="text" name="fano" value={form.ano} onChange={(e)=>handleFormChange(e)}/><br />


        <p>Nome Digitado: {form.nome}</p>
        <p>Curso digitado: {form.curso}</p>
        <p>Ano digitado: {form.ano}</p>

        <br />
        <hr />

        <p>Contagem:{contagem}</p>
        <button onClick={()=>{setContagem(contagem + 1)}}>Clique Aqui</button>


        <hr />
        <br/>
        <br />
        <label>Digite um nome</label>
        <input type="text" name="" value={nome_storage} onChange={(e)=>{setNomeStorage(e.target.value)}}/>
        <button onClick={()=>{armazenar('ls_nome',nome_storage)}}>Gravar Nome</button>
        <button onClick={()=>{consultar('ls_nome')}}>Consultar</button>
        <button onClick={()=>{apagar('ls_nome')}}>remover</button>

      </Main>

      
      <Footer/>
    </>
  )
}

export default App
