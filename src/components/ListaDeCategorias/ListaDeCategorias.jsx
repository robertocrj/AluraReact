import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  _handleEventoInputd(e) {
    if (e.key == "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return <li key={index} className="lista-categorias_item">{categoria}</li>;
          })}
        </ul>
        <input
          type="text"
          className="lista-categoria_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInputd.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
