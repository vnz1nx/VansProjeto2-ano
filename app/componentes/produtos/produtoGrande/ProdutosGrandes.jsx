"use client";

import { useState } from "react";
import ProdutosPequenos from "../produtoPequeno/ProdutosPequenos";
import "./produtosgrandes.css";

const shirts = [
  { id: "camisa1", name: "Camisa GTA San Andreas", price: 70 },
  { id: "camisa2", name: "Camisa Los Santos", price: 80 },
  { id: "camisa3", name: "Camisa Grove Street", price: 75 },
];

export default function ProdutosGrandes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id, name, price } = shirts[currentIndex];

  const handleNext = () => {
    setCurrentIndex((index) => (index + 1) % shirts.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((index) => (index - 1 + shirts.length) % shirts.length);
  };

  return (
    <article className="produto-destaque">
      <div className="produto-destaque__conteudo">
        <h3 className="produto-destaque__titulo">
          Novos <br /> Estilos <br /> e mais
        </h3>
        <span className="produto-destaque__linha" aria-hidden="true" />
        <button type="button" className="produto-destaque__cta">
          Comprar
        </button>
      </div>

      <div className="produto-destaque__carousel" aria-live="polite">
        <button
          type="button"
          className="produto-destaque__controle"
          onClick={handlePrevious}
          aria-label="Ver produto anterior"
        >
          ‹
        </button>

        <ProdutosPequenos id={id} name={name} price={price} />

        <button
          type="button"
          className="produto-destaque__controle"
          onClick={handleNext}
          aria-label="Ver próximo produto"
        >
          ›
        </button>
      </div>
    </article>
  );
}
