// import React from 'react'
// import ReactDOM from 'react-dom'
// //import {Primeiro,Segundo,Terceiro} from './component.jsx'
// //import FamiliaSilva from './familiaSilva'
// import Familia from './familia'
// import Membro from './member'

// ReactDOM.render(
//         <Familia sobrenome='Silva '>
//             <Membro nome='Guilherme ' />
//             <Membro nome='Pedro ' />
//             <Membro nome='Luis ' />
//         </Familia>
//     , document.getElementById('app'))

// import React from 'react'
// import ReactDOM from 'react-dom'
// import ClassComponent from './classComponent'
// ReactDOM.render(
//     <ClassComponent label="Idade" idade={21} />
//     , document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'
ReactDOM.render(
    <ClassComponent label="Calculadora" num1={0} num2={0} />
    , document.getElementById('app'))
