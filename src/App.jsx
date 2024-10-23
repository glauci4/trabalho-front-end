import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header
        texto="Gloss Dior"
        imagem="https://lojadior.vtexassets.com/arquivos/ids/188330/3348901491242_02--highlight-lip-glow-oil.jpg?v=638259919142800000"
        preco="249,00"
      />

      <Header
        texto="Gloss Franciny Ehlke"
        imagem="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw7b13e5fe/images/Color%20BR/FRAN/lips/Chocochilli/7898724570847-1_1000px.jpg?sw=1200&sh=1200&sm=fit"
        preco="52,00"
      />

      <Header
        texto="Gloss Eudora"
        imagem="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E54613/9663e729-3131-4a03-a86c-fb8e1b8d376e-e56493-niina-secrets-lip-oil-shine-flowers-rosa-silvestre-7ml-frontal-aberto.jpg"
        preco="46,99"
      />
    </>
  );
}

export default App;
