//IMPORTATION DE REACT ET DE COMPONENT
import React, { Component } from 'react'; 

//IMPORTATION DES DEUX FICHIERS JS
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeyPadComponent';

//IMPORTATION DU CSS
import './App.css';

//CREATION D'UNE CLASSE QUI HERITE
class App extends Component { 
    constructor() {
    //APPELLE LE CONSTRUCTEUR PARENT COMPONENT    
        super(); 

    //RESULTAT EN SORTIE     
        this.state = {
            result: "" 
        }
    }

    onClick = button => {
        if(button === "="){
            this.calcultate()
        }
        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }
        else{
            this.setState({
                result:this.state.result + button
            })
        }
    }

    calcultate = () => {
        try {
            this.setState({
                // La fonction eval() permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères.
                // eslint-disable-next-line
                result: (eval(this.state.result) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };


    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    {/* components with props */}
                    <ResultComponent result={this.state.result} />
                    {/* component with function */}
                    <KeyPadComponent onClick={this.onClick} />
                </div>
            </div>
        );
    }
}
export default App;