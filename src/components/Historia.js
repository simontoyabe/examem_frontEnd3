import React, { Component } from 'react';
import historias from "./data.json";
import Selection from "./Escogencia";
import Recordatorio from "./Recordatorio";
import {Swal} from 'sweetalert2';

const historial = []
class Historia extends Component {
    constructor(props){
        super(props);
        this.state = {
            seleccion : 0,  
            letraEscogida : ""         
        }
    }

    componentDidMount(){
        historias.push(historias.shift());       
    }

    componentDidUpdate(prevProps, prevState) {
        historias.push(historias.shift());

        historial.push(this.state.letraEscogida);

        if(historial.length === 5){
            Swal.fire('Lo lograste, gracias por jugar!')
            window.location.replace('');
        }
        
    }

    handleClick = (event) => {
        console.log(historias.lenght)
        if (event.target.id === "A"){
            this.setState({seleccion : 0, letraEscogida : "A"})
        }else{
            this.setState({seleccion : 1, letraEscogida : "B"})
        }
    }
    
    render (){
        return (
            <div className = "layout">
                <h1 className = "historia">{historias[this.state.seleccion].historia}</h1>                
                <div className = "opciones">
                    <Selection storyId="A" storyOption={historias[this.state.seleccion].opciones.a} handleClick={this.handleClick}/>
                    <Selection storyId="B" storyOption={historias[this.state.seleccion].opciones.b} handleClick={this.handleClick}/>
                </div>
                <Recordatorio lastSelection={this.state.letraEscogida} historical={historial.map(
            (event, index) => (
              <li key={index}>{event}</li>
            ),
            historias[this.state.seleccion].id
          )}/>
            </div>
        )
    }
}

export default Historia;