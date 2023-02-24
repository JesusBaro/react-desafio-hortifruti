import "./files/style.css"
import alface from "./files/img/alface.png"
import beterraba from "./files/img/beterraba.png"
import cenoura from "./files/img/cenoura.png"
import cereja from "./files/img/cereja.png"
import laranja from "./files/img/laranja.png"
import limao from "./files/img/limao.png"
import manga from "./files/img/manga.png"
import tomate from "./files/img/tomate.png"

import React, { Component } from 'react'
class HortifruttiPage extends Component {

  state = {
    Produtos: [
      {
        imagem: `${alface}`,
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
    ]
  }


  render() {
    return (
      <body>
        <div class="Header">
          <h1>Hortifruti</h1>
          <h2>VnW</h2>
        </div>

        <section class="Main">
          <h2>Nossos Produtos</h2>


          {this.state.Produtos.map((item) => (
            <div id="FruitSection">
              <img src="{item.imagem}" alt="{item.titulo}" />
            </div>
          ))} 
  {/* <img src={this.state.Produtos[0].imagem} alt="{item.imagem}" /> */}


          <div id="ShopCarSection">

          </div> 
        </section>
      </body>

    )
  }
} export default HortifruttiPage

