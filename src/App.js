import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [pagina,setPagina] = useState(corpo[0].home);
  return (
    <div className="App">
      <Header>
        {document.getElementById('btnhome').onclick=()=>setPagina(corpo[0].home)}
        {document.getElementById('btnhistoria').onclick=()=>setPagina(corpo[0].historia)}
        {document.getElementById('btncardapio').onclick=()=>setPagina(corpo[0].cardapio)}
        {document.getElementById('btncontato').onclick=()=>setPagina(corpo[0].contato)}
        {document.getElementById('btnlocalizacao').onclick=()=>setPagina(corpo[0].localizacao)}
      </Header>

      <Main paginas={pagina}/>
      <Footer/>
    </div>
  );
}



const corpo = [
  {
    home:{
      id:1,
      titulo:"Bem Vindo a Nossa Página",
      blocotxt:`A gente sempre dá um jeito, resume Mayane Brito, 32 anos, enfermeira numa unidade
               de Saúde da Família em São José de Espinharas, interior da Paraíba. De carro, moto,
                barco ou mesmo atravessando rio a pé, com a caixa de doses sobre a cabeça, ela tem
                 chegado até os idosos da zona rural para imunizá-los contra a Covid-19. 
                 É recebida com entusiasmo e confiança
                 A gente sempre dá um jeito, resume Mayane Brito, 32 anos, enfermeira numa unidade
               de Saúde da Família em São José de Espinharas, interior da Paraíba. De carro, moto,
                barco ou mesmo atravessando rio a pé, com a caixa de doses sobre a cabeça, ela tem
                 chegado até os idosos da zona rural para imunizá-los contra a Covid-19. 
                 É recebida com entusiasmo e confiança
                 A gente sempre dá um jeito, resume Mayane Brito, 32 anos, enfermeira numa unidade
               de Saúde da Família em São José de Espinharas, interior da Paraíba. De carro, moto,
                barco ou mesmo atravessando rio a pé, com a caixa de doses sobre a cabeça, ela tem
                 chegado até os idosos da zona rural para imunizá-los contra a Covid-19. 
                 É recebida com entusiasmo e confiança
                 A gente sempre dá um jeito, resume Mayane Brito, 32 anos, enfermeira numa unidade
               de Saúde da Família em São José de Espinharas, interior da Paraíba. De carro, moto,
                barco ou mesmo atravessando rio a pé, com a caixa de doses sobre a cabeça, ela tem
                 chegado até os idosos da zona rural para imunizá-los contra a Covid-19. 
                 É recebida com entusiasmo e confiança
                 A gente sempre dá um jeito, resume Mayane Brito, 32 anos, enfermeira numa unidade
               de Saúde da Família em São José de Espinharas, interior da Paraíba. De carro, moto,
                barco ou mesmo atravessando rio a pé, com a caixa de doses sobre a cabeça, ela tem
                 chegado até os idosos da zona rural para imunizá-los contra a Covid-19. 
                 É recebida com entusiasmo e confiança
                 A gente sempre dá um jeito, resume Mayane Brito, 32 anos, enfermeira numa unidade
               de Saúde da Família em São José de Espinharas, interior da Paraíba. De carro, moto,
                barco ou mesmo atravessando rio a pé, com a caixa de doses sobre a cabeça, ela tem
                 chegado até os idosos da zona rural para imunizá-los contra a Covid-19. 
                 É recebida com entusiasmo e confiança`
    },
    historia:{
      id:2,
      titulo:"Conheça a nossa história",
      blocotxt:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Omnis magnam harum soluta! Accusantium eius nostrum molestiae 
                velit assumenda aliquid amet expedita a voluptatum, quis neque 
                distinctio praesentium, accusamus ut nulla.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Omnis magnam harum soluta! Accusantium eius nostrum molestiae 
                velit assumenda aliquid amet expedita a voluptatum, quis neque 
                distinctio praesentium, accusamus ut nulla
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Omnis magnam harum soluta! Accusantium eius nostrum molestiae 
                velit assumenda aliquid amet expedita a voluptatum, quis neque 
                distinctio praesentium, accusamus ut nulla`,
      imagens:{
        foto1:"img/cafeteria1.jpg",
        foto2:"img/cafeteria3.jpg",
        foto3:"img/cafeteria4.jpg"
      }
    },
    cardapio:{
      id:3,
      titulo:"Confira nosso cardápio",
      blocotxt:"Nosso cardápio",
      imagens:{
        cafes:{
          foto1:'img/cafe1.jpg',
          texto1:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magnam harum soluta!',
          foto2:'img/cafe2.jpg',
          texto2:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magnam harum soluta!',
          foto3:'img/cafe3.jpg',
          texto3:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magnam harum soluta!',
          foto4:'img/cafe4.jpg',
          texto4:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magnam harum soluta!'
        },
        salgados:{
          foto1:'img/salgado1.jpg',
          texto1:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magnam harum soluta!',
          foto2:'img/salgado2.jpg',
          texto2:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magnam harum soluta!',
          foto3:'img/salgado3.jpg',
          texto3:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magnam harum soluta!',
          foto4:'img/salgado4.jpg',
          texto4:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magnam harum soluta!'
        },
        doces:{
          foto1:'img/doce1.jpg',
          texto1:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magnam harum soluta!',
          foto2:'img/doce2.jpg',
          texto2:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magnam harum soluta!',
          foto3:'img/doce3.jpg',
          texto3:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magnam harum soluta!',
          foto4:'img/doce4.jpg',
          texto4:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magnam harum soluta!'
        }
      }
      },
      contato:{
        id:4,
        titulo:"Contato",
        blocotxt:"Formulário para contato"
        },

        localizacao:{
          id:5,
          titulo:"Localização",
          blocotxt:"Mapa do google",
        }
  }
]


export default App;

