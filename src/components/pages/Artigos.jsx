import React from 'react'
import Artigo from '../artigos/Artigo'

import Header from '../Header'
import Footer from '../Footer'

function Artigos() {

  let bg = "bg-black-custom"

  return (
    <div id='main' className='w-full bg-orange-custom'>
      <Header></Header>
      <div className='w-11/12 m-auto pt-8'>
        <h1 className='font-Perandory text-8xl md:text-9xl text-red-custom'>Artigos</h1>
      </div>
      <Artigo link = "src/assets/arquivos/Griôs .pdf" color = "text-black" title = "Descolonização do conhecimento: Os Griôs" text = "Durante muito tempo a história do povo negro vem sendo contada pela perspectiva da história de brancos." ></Artigo>
        <Artigo link = "src/assets/arquivos/Ideias para adiar o fim do mundo.pdf" color = "text-black" title = "Ideias para adiar o fim do mundo" text = "“Ideias para adiar o fim do mundo” é um livro de Ailton Krenak, autor indigena, nascido na região do Rio Doce, em Minas Gerais, região extremamente afetada por atividades mineiras." ></Artigo>
        <Artigo link = "src/assets/arquivos/Dia 25 de Julho dia da Mulher Negra Latina e Caribenha.pdf" color = "text-black" title = "Dia 25 de Julho dia da Mulher Negra Latina e Caribenha" text = "A data de 25 de julho foi definida como Dia Da Mulher Negra Latina e Caribenha, a partir de uma assembleia realizada em 1992, na cidade de Santo Domingos, na República Dominicana." ></Artigo>
        <Artigo link = "src/assets/arquivos/A Lei de Cotas.pdf" color = "text-black" title = "A Lei de Cotas" text = "A Lei 12.711, de 2012, que reserva vagas em universidades e institutos federais a estudantes negros, indígenas, de baixa renda oriundos de escolas públicas e pessoas com deficiência, que foi aprovada pelo Congresso e sancionada em 2012, completa dez anos na segunda-feira (29)." ></Artigo>
        <Footer></Footer>
    </div>
  )
}

export default Artigos