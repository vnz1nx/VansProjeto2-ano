import Image from "next/image";

export default function ProdutosMedios({ highlights, id, imageUrl, imageAlt }) {
  return (
    <article className="produto-medio" aria-labelledby={`${id}-destaque`}>
      <div className="produto-medio__conteudo">
        <h3 id={`${id}-destaque`} className="produto-medio__titulo">
          {highlights.map((texto) => (
            <span key={texto}>{texto}</span>
          ))}
        </h3>
        <span className="produto-medio__linha" aria-hidden="true" />
        <button type="button" className="produto-medio__cta">
          Comprar
        </button>
      </div>
      <div className="produto-medio__imagem" aria-hidden="true">
        <Image
          src={imageUrl}
          alt={imageAlt ?? highlights.join(" ")}
          fill
          sizes="(max-width: 768px) 80vw, 420px"
          className="produto-medio__imagem-foto"
          priority={id === "skatista"}
        />
      </div>
    </article>
  );
}
