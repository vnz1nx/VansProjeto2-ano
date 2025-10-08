const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 2,
});

export default function ProdutosPequenos({ id, name, price }) {
  return (
    <article className="produto-pequeno" aria-labelledby={`${id}-titulo`}>
      <div
        className={`produto-pequeno__imagem produto-pequeno__imagem--${id}`}
        role="presentation"
        aria-hidden="true"
      />
      <h3 id={`${id}-titulo`} className="produto-pequeno__nome">
        {name}
      </h3>
      <span className="produto-pequeno__separador" aria-hidden="true" />
      <p className="produto-pequeno__valor">{currencyFormatter.format(price)}</p>
    </article>
  );
}
