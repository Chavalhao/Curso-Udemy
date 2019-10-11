import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"/>
            <Filho nome="Paulo"/>
            <Filho nome="Carla"/>
            <Filho nome="Paula"/>
        </Pai>
    </div>
    , document.getElementById('root'))








//import Saudacao from './components/Saudacao'

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João"/>
//     </div>
// , document.getElementById('root'))



//import Primeiro from './components/Primeiro'
//componentes devem começar com letra Maiúscula
//import BomDia from './components/BomDia'

//const elemento = <h1>React 2</h1>

//ReactDOM.render(<BomDia nome="Guilherme" idade={10}/>, document.getElementById('root'))

// import {BoaTarde, BoaNoite} from './components/Multiplos'

// ReactDOM.render(
//     <div>
//         <BoaTarde nome="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>
// , document.getElementById('root'))