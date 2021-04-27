import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form 
      className="form-cadastro" 
      onSubmit={this._criarNota.bind(this)}
      >
        <input
          className="form-cadastro_input"
          type="text"
          placeholder="Titulo"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          className="form-cadastro_input"
          placeholder="Escreva sua nota"
          rows={15}
          onChange={this._handleMudancaTexto.bind(this)}
        />

        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
