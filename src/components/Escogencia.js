import React, {Component} from 'react';

class Escogencia extends Component {
    

    render (){
        return (
            <div className = "opcion">
                <button id={this.props.idHistoria} className="botones" onClick={this.props.handleClick}>
                    {this.props.idHistoria}
                </button>
                <h2>{this.props.opcionHistoria}</h2>
            </div>
        )
    }

}

export default Escogencia;