import React, { Component } from 'react';
import Alface from "./files/img/alface.png";
import beterraba from "./files/img/beterraba.png";
import cenoura from "./files/img/cenoura.png";
import cereja from "./files/img/cereja.png";
import laranja from "./files/img/laranja.png";
import limao from "./files/img/limao.png";
import manga from "./files/img/manga.png";
import tomate from "./files/img/tomate.png";
import botaoMenus from "./files/vetor/MinusCircle.png";
import botaoMais from "./files/vetor/PlusCircle.png";
import shopCart from "./files/vetor/Shopcart.png";
import "./files/style.css"

class HortifruttiPage extends Component {

  state = {
    produtos: [
      {
        imagem: `${Alface}`,
        titulo: "alface"
      },
      {
        imagem: `${laranja}`,
        titulo: "laranja"
      },
      {
        imagem: `${cereja}`,
        titulo: "cereja"
      },
      {
        imagem: `${cenoura}`,
        titulo: "cenoura"
      },
      {
        imagem: `${manga}`,
        titulo: "manga"
      },
      {
        imagem: `${limao}`,
        titulo: "limao"
      },
      {
        imagem: `${beterraba}`,
        titulo: "beterraba"
      },
      {
        imagem: `${tomate}`,
        titulo: "alface"
      },
    ],
    botoes :
        [
       {
          imagemBotao : `${botaoMenus}`,
            tituloBotao: "Botão para remover um item ao carrinho."
        
      },
      {
        imagemBotao : `${botaoMais}`,
          tituloBotao: "Botão para adicionar um item ao carrinho."
      
    },
    {
      imagemBotao : `${shopCart}`,
        tituloBotao: "Carrinho de compras."
    
  }
    ]
  }


  render() {
    return (
      <section>
        <div className="Header">
          <h1>Hortifruti</h1>
          <h2>VnW</h2>
        </div>

          <h2 className='TittleProductContainer'>Nossos Produtos</h2>
        <section className="ProductContainer">
         
          <div className="FruitSection">
            {this.state.produtos.map((item) => (
              <div className="FruitBox">
                <img className='imagensDosLegumes' src={item.imagem} alt={item.titulo} />
              </div>
            ))}
          </div>

          <div id="ShopCarSection">
            <div className='CarrinhoBox'>
            <img className='imagemCarrinho' src= {this.state.botoes[2].imagemBotao} alt={this.state.botoes[2].tituloBotao} />

              <p className='Paragraph'>Arraste o seu produto aqui para colocar no carrinho</p>
            </div>
            <div className='CarrinhoButton'>
            <img className='imagemBotao' src= {this.state.botoes[1].imagemBotao} alt={this.state.botoes[1].tituloBotao} />
            <img className='imagemBotao' src= {this.state.botoes[0].imagemBotao} alt={this.state.botoes[0].tituloBotao} />
            </div>

          </div>
        </section>
      </section>

    )
  }
} export default HortifruttiPage

