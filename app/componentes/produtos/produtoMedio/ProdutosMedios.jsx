export default function ProdutosMedios({ highlights, id }) {
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
      <div
        className={`produto-medio__imagem produto-medio__imagem--${id}`}
        role="presentation"
        aria-hidden="true"
      />
    </article>
  );
}
