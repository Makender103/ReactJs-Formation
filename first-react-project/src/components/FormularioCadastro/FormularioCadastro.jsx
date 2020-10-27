import React, { Component } from 'react'
import './style.css'

export default class FormularioCadastro extends Component {

    constructor(props){
        super(props);
        this.title ="";
        this.text ="";
        this.categoria = "Sem Cat"
      }
      
      _handleChaneCategoria(evento) {
        evento.stopPropagation();
        this.categoria = evento.target.value;
      }


      _handleChangeTitle(evento){
        evento.stopPropagation();
        this.title = evento.target.value;
      }
    
      _handleChangeText(evento){
        evento.stopPropagation();
        this.text = evento.target.value;
      }
    
      _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();

        this.props.criarNota(this.title, this.text, this.categoria);
        
      }

    render(){
        return (
            <form className="form-cadastro"
              onSubmit={this._criarNota.bind(this)}
            >
              <select onChange={this._handleChaneCategoria.bind(this)} className="form-cadastro_input ">
                <option defaultChecked>Sem Categoria</option>
                { this.props.categorias.map(categoria =>{
                  return (
                    <option>{categoria}</option>
                  )
                })}
              </select>

              <input
                type="text"
                placeholder="Título"
                className="form-cadastro_input"
                onChange={this._handleChangeTitle.bind(this)}
              />
              <textarea
                rows={10}
                placeholder="Escreva sua nota..."
                className="form-cadastro_input"
                onChange={this._handleChangeText.bind(this)}
              />
              <button className="form-cadastro_input form-cadastro_submit">
                Criar Nota
              </button>
            </form>
          );
    }
}