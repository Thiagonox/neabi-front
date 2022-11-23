import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Artigo from '../artigos/Artigo'

export default function Visualizar() {
  return (
    <div>
      <Header></Header>
      <main className='w-11/12 m-auto mt-4'>
        <p className='text-2xl font-Perandory text-center text-red-custom'>Arte</p>
        <h1 className='mt-4 text-5xl font-Perandory text-center'><mark className='bg-orange-custom'>XX Mostra de Arte e Cultura Afro-brasileira</mark></h1>
        <p className='text-base font-Bluu text-center mt-4'>Publicado em 21 nov 2022</p>
        <hr className='border-t-2 my-4 border-yellow-custom' />
        <div className='grid grid-cols-3'>
          <div className='md:ml-14 mb-8 md:col-span-2 col-span-3'>
            <img className='md:w-2/3' src="https://images.unsplash.com/photo-1574550399363-26037cf7d8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFydGUlMjBhZnJvfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
            <h2 className='mt-8 text-3xl font-Perandory'><mark className='bg-orange-custom'>Resumo</mark></h2>
            <p className='max-w-2xl mt-4 text-lg font-Bluu'>Examinando objetos relacionados aos antigos candomblés preservados em coleções, Marianno Carneiro da Cunha perfilou uma tradição estética nagô-iorubana criada no Brasil que tem sido considerada como uma das primeiras formulações da arte afro-brasileira, se não uma continuidade da arte africana no Brasil. Expandimos a amostragem enraizada nessa tradição descrita por esse estudioso, chegando a um novo corpus que apresentamos neste artigo, tentando estabelecer as potencialidades da análise estilística que ele empregou, e introduziu no Brasil, como procedimento metodológico no estudo da cultura material de origem africana. Os dados obtidos revelam que, muito além do que originalmente representam, esses objetos podem se constituir apenas em um repertório visual emblemático de abordagens híbridas da produção acadêmica sobre as culturas africanas tanto quanto sobre o negro no Brasil, caso eles não venham a ser retomados através das suas expressões de materialidade próprias e individuais.</p>
            <h3 className='mt-8 text-2xl font-Perandory'><mark className='bg-orange-custom'>Palavras-chave</mark></h3>
            <p  className='max-w-xl mt-2 text-lg font-Bluu'>Coleções etnográficas; Estilística (escultura africana); Estudos africanistas; Museus (Brasil)</p>
            <hr className='border-t-2 my-4 border-yellow-custom' />
            <h2 className='mt-8 text-3xl font-Perandory'><mark className='bg-orange-custom'>Introdução ao assunto e as primeiras publicações</mark></h2>
            <p className='max-w-2xl mt-8 text-lg font-Bluu'>Este artigo expõe uma experiência de interpretação de objetos em coleções atribuídos aos antigos candomblés, a partir da formação prévia de um corpus composto de esculturas publicadas por estudiosos da primeira metade do século XX. Seu núcleo é constituído por uma seleção de objetos feita por Marianno Carneiro da Cunha, conforme publicada em Arte Afro-brasileira em 1983, pela qual ele estipulou uma tradição escultórica africana no Brasil. A partir de então, essas esculturas vêm sendo consideradas uma das primeiras formas da arte afro-brasileira, o que se consagrou através de A mão afro-brasileira, de Emanoel Araujo, cuja primeira edição se deu em 1988 e gerou seu acumulado trabalho de curadoria sobre o assunto pelo qual é mundialmente reconhecido.</p>
            <p className='max-w-2xl mt-8 text-lg font-Bluu'>Entre os estudiosos anteriores, não há quem não se tenha curvado diante do valor estético dessas esculturas que vinham sendo apreendidas dos cultos africanos no Brasil pela Polícia da Corte, órgão militar vigente ao longo da monarquia do Brasil oitocentista. Nesse contexto de descoberta, seus aspectos estilísticos e tecnológicos foram tragados por correntes de pensamento que, desde o final do século XIX, se entrecruzaram durante um duradouro processo assistemático subjacente aos interesses acadêmicos despertados sobre o negro e os desdobramentos socioculturais do escravismo africano no Brasil e nas Américas.</p>
            <p className='max-w-2xl mt-8 text-lg font-Bluu'>Este artigo expõe uma experiência de interpretação de objetos em coleções atribuídos aos antigos candomblés, a partir da formação prévia de um corpus composto de esculturas publicadas por estudiosos da primeira metade do século XX. Seu núcleo é constituído por uma seleção de objetos feita por Marianno Carneiro da Cunha, conforme publicada em Arte Afro-brasileira em 1983, pela qual ele estipulou uma tradição escultórica africana no Brasil. A partir de então, essas esculturas vêm sendo consideradas uma das primeiras formas da arte afro-brasileira, o que se consagrou através de A mão afro-brasileira, de Emanoel Araujo, cuja primeira edição se deu em 1988 e gerou seu acumulado trabalho de curadoria sobre o assunto pelo qual é mundialmente reconhecido.</p>
            <h2 className='mt-8 text-3xl font-Perandory'><mark className='bg-orange-custom'>A devida autoria incógnita da arte afro-brasileira</mark></h2>
            <p className='max-w-2xl mt-8 text-lg font-Bluu'>Este artigo expõe uma experiência de interpretação de objetos em coleções atribuídos aos antigos candomblés, a partir da formação prévia de um corpus composto de esculturas publicadas por estudiosos da primeira metade do século XX. Seu núcleo é constituído por uma seleção de objetos feita por Marianno Carneiro da Cunha, conforme publicada em Arte Afro-brasileira em 1983, pela qual ele estipulou uma tradição escultórica africana no Brasil. A partir de então, essas esculturas vêm sendo consideradas uma das primeiras formas da arte afro-brasileira, o que se consagrou através de A mão afro-brasileira, de Emanoel Araujo, cuja primeira edição se deu em 1988 e gerou seu acumulado trabalho de curadoria sobre o assunto pelo qual é mundialmente reconhecido.</p>
            <p className='max-w-2xl mt-8 text-lg font-Bluu'>Entre os estudiosos anteriores, não há quem não se tenha curvado diante do valor estético dessas esculturas que vinham sendo apreendidas dos cultos africanos no Brasil pela Polícia da Corte, órgão militar vigente ao longo da monarquia do Brasil oitocentista. Nesse contexto de descoberta, seus aspectos estilísticos e tecnológicos foram tragados por correntes de pensamento que, desde o final do século XIX, se entrecruzaram durante um duradouro processo assistemático subjacente aos interesses acadêmicos despertados sobre o negro e os desdobramentos socioculturais do escravismo africano no Brasil e nas Américas.</p>
          </div>
          <section className='col-span-1 m-6 bg-green-custom hidden md:block'>
            <h2 className='mt-4 text-3xl font-Perandory text-center text-white-custom'>Veja Também</h2>
            <h2 className='mt-4 text-3xl font-Perandory text-center text-white-custom'>Topicos</h2>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}
