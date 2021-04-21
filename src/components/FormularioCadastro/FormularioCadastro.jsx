import React, { Component } from "react";
import "./estilo.css";

class Formulario extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input
          className="form-cadastro_input"
          type="text"
          placeholder="Titulo"
        />
        <textarea
          className="form-cadastro_input"
          placeholder="Escreva sua nota"
          rows={15}
        />

        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default Formulario;
