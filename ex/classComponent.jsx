// import React, { Component } from 'react'
// export default class ClassComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { idade: props.idade }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event){
//         this.setState(
//             {idade: event.target.value}
//         )
//     }
//     opera(x) {
//         this.setState(
//             { idade: Number(this.state.idade) + x }
//         )
//     }
//     render() {
//         return (
//             <div>
//                 <h1> {this.props.label} </h1>
//                 <h2> <input onChange={this.handleChange} value = {this.state.idade}/> </h2> 
//                 <h3> <button onClick={() => this.opera(+1)}>
//                     Incrementa
//                     </button>
//                 </h3>
//                 <h3><button onClick={() => this.opera(-1)}>
//                     Decrementa
//                     </button>
//                 </h3>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'
export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: this.props.num1,
            num2: this.props.num2,
            operador: this.props.operador,
            resultado: this.props.resultado
        }
        this.handleChangeNum1 = this.handleChangeNum1.bind(this)
        this.handleChangeNum2 = this.handleChangeNum2.bind(this)
    }

    handleChangeNum1(event) {
        this.setState(
            { num1: event.target.value }
        )
    }
    handleChangeNum2(event) {
        this.setState(
            { num2: event.target.value }
        )
    }
    soma() {
        this.setState(
            {
                resultado: Number(this.state.num1) + Number(this.state.num2),
                operador: "+"
            }
        )
    }
    subtrai() {
        this.setState(
            {
                resultado: Number(this.state.num1) - Number(this.state.num2),
                operador: "-"
            }
        )
    }
    multiplica() {
        this.setState(
            {
                resultado: Number(this.state.num1) * Number(this.state.num2),
                operador: "*"
            }
        )
    }
    divide() {
        this.setState(
            {
                resultado: Number(this.state.num1) / Number(this.state.num2),
                operador: "/"
            }
        )
    }
    render() {
        return (
            <div>
                <h2> <input onChange={this.handleChangeNum1} value={this.state.num1} /> </h2>
                <h2> {this.state.operador} </h2>
                <h2> <input onChange={this.handleChangeNum2} value={this.state.num2} /> </h2>
                <h2> Resultado: {this.state.resultado}</h2>

                <h3> <button onClick={() => this.soma()}>
                    +
                    </button>
                </h3>

                <h3><button onClick={() => this.subtrai()}>
                    -
                    </button>
                </h3>

                <h3><button onClick={() => this.multiplica()}>
                    *
                    </button>
                </h3>

                <h3><button onClick={() => this.divide()}>
                    /
                    </button>
                </h3>
            </div>
        )
    }
}

