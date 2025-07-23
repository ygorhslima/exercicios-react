import React from "react"
import axios from 'axios'

export default class ListaCarros extends React.Component {
    
    state={
        carros:[]
    }

    componentDidMount(){
        axios.get('http://localhost:3000')
        .then(res=>{
            const dadosCarros = res.data
            // adicionar o conteúdo para o state
            this.setState({carros:dadosCarros}) 
        })
    }

    render(){
        return(
            <div>
                {this.state.carros.map(
                    (carro)=>(
                        <div key={carro.id}>
                            {carro.id} - {carro.marca} - {carro.modelo}
                        </div>
                    )
                )}
            </div>
        )
    }
}