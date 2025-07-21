/*

 Montagem (Nascimento)
- `constructor()`: Onde o componente nasce e você define seu estado inicial
- `static getDerivedStateFromProps()`: Atualiza o estado com base nas propriedades (props) antes de renderizar.
- `render()`: Desenha o componente na tela.
- `componentDidMount()`: Chamado logo depois que o componente aparece na tela (bom para buscar dados ou configurar eventos).

 Atualização (Crescimento e Mudança)
- static getDerivedStateFromProps()`: (Novamente) Atualiza o estado antes de cada renderização.
- shouldComponentUpdate()`: Pergunta se o componente precisa mesmo ser atualizado (pode otimizar performance).
- render()`: Redesenha o componente com as novas informações.
- getSnapshotBeforeUpdate()`: Captura informações do DOM antes da atualização.
- componentDidUpdate()`: Chamado depois que o componente é atualizado na tela (bom para reagir a mudanças).

 Desmontagem (Morte)
- componentWillUnmount()`: Chamado antes do componente ser removido da tela (essencial para limpar o que foi configurado, como eventos ou temporizadores).

 Tratamento de Erros (Problemas)
- static getDerivedStateFromError()`: Atualiza o estado para mostrar uma interface de erro.
- componentDidCatch()`: Registra o erro em algum serviço para análise.

Em essência, elas dão a você controle sobre o que acontece com seu componente em cada fase da sua "vida".

*/
import React from "react"
class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo = "HRV"
        this.state = {
            ligado:false,
            velAtual: 0
        }
    }

    componentDidMount(){
        console.log("o carro foi criado")
    }

    componentDidUpdate(){
        console.log("o carro foi atualizado")
    }

    componentWillUnmount(){
        console.log("o carro foi destruido")
    }


    ligarDesligar(){
        this.setState((state)=>(
            {ligado:!state.ligado}
        ))
    }

    acelerar(){
        this.setState(
            (state, props)=>(
                {velAtual:state.velAtual + props.fator}
            )
        )
    }

    render(){
        return(
            <div>
                <h1>Meu Carro</h1>
                <p>Ligado: {this.state.ligado ? "sim":"não"}</p>
                <p>Vel.atual: {this.state.velAtual}</p>
                <button onClick={()=>this.ligarDesligar()}>{
                    this.state.ligado ? "Desligar" : "Ligar"
                }</button>
                <br />
                <button onClick={()=>this.acelerar()}>
                    Acelerar
                </button>
            </div>
        )
    }
}

export default Carro
