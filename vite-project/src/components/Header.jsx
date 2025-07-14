import { BrowserRouter, Routes, Route } from 'react-router'
import './style/Header.css'
import Logo from '../assets/logo.webp'
import Relogio from './Relogio'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contatos from '../pages/Contatos'



export default function Header(){
    const nome_do_site = "Site React"
    return(
        <header>
            <Relogio></Relogio>
            <h1>
                <img src={Logo} alt="" width={70}/>
                {nome_do_site}
            </h1>

            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/sobre' element={<Sobre/>}></Route>
                        <Route path='/contato' element={<Contatos/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </header>
    )
}