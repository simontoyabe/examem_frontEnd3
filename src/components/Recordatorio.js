import React, { Component } from 'react';

class Recordatorio extends Component {
    render() {
            return (
        <div className="recordatorio">
            <h3>Selección anterior: {this.props.ultimoEscogido}</h3>
            <h4>Historial de las opciones elegidas: </h4>
            <ul>{this.props.historico}</ul>
        </div>
        )
    }
}

export default Recordatorio;