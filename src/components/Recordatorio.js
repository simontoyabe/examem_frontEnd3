import React, { Component } from 'react';

class Recordatorio extends Component {
    render() {
            return (
        <div className="recordatorio">
            <h3>Selección anterior: {this.props.lastSelection}</h3>
            <h4>Historial de las opciones elegidas: </h4>
            <ul>{this.props.historical}</ul>
        </div>
        )
    }
}

export default Recordatorio;