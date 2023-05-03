import { useState } from 'react';
import './style.css'
import Card from '../../componentes/Card/index'
function Inicial(){

    const[nomeAluno, setNomeAluno] = useState();

    function inserirNome(nome){
        setNomeAluno(nome)
    }
    return(
        <div className="container">
        <h1>Lista de Presença</h1>
        <input type="text" placeholder='Digite seu Nome' onChange={ e => inserirNome(e.target.value)} />
        <button type='button'>Adicionar</button>

        <Card nome={ nomeAluno } hora="22:30:10"/>
        </div>
    )
}

export default Inicial