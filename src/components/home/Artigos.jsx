import React from 'react'
import Artigo from '../artigos/Artigo'


function Artigos() {
  return (
    <section className='bg-black-custom w-full py-8'>
        <h1 className='font-Perandory text-6xl text-yellow-custom text-center mb-4 mt-6'>ARTIGOS</h1>
        <Artigo link = "../assets/arquivos/Griôs.pdf" title = "Descolonização do conhecimento: Os Griôs" text = "Durante muito tempo a história do povo negro vem sendo contada pela perspectiva da história de brancos." ></Artigo>
        <Artigo link = "../assets/arquivos/Ideias para adiar o fim do mundo.pdf" title = "Ideias para adiar o fim do mundo" text = "“Ideias para adiar o fim do mundo” é um livro de Ailton Krenak, autor indigena, nascido na região do Rio Doce, em Minas Gerais, região extremamente afetada por atividades mineiras." ></Artigo>
        <Artigo link = "src/assets/arquivos/Dia 25 de Julho dia da Mulher Negra Latina e Caribenha.pdf" title = "Dia 25 de Julho dia da Mulher Negra Latina e Caribenha" text = "A data de 25 de julho foi definida como Dia Da Mulher Negra Latina e Caribenha, a partir de uma assembleia realizada em 1992, na cidade de Santo Domingos, na República Dominicana." ></Artigo>
    </section>
  )
}

export default Artigos