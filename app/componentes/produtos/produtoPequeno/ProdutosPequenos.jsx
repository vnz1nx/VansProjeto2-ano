import Image from "next/image";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 2,
});

export default function ProdutosPequenos({
  id,
  name,
  price,
  imageUrl,
  imageAlt,
}) {
  return (
    <article className="produto-pequeno" aria-labelledby={`${id}-titulo`}>
      <div className="produto-pequeno__imagem" aria-hidden="true">
        <Image
          src={imageUrl}
          alt={imageAlt ?? name}
          fill
          sizes="(max-width: 768px) 45vw, 200px"
          className="produto-pequeno__imagem-foto"
          priority={id === "sapato1"}
        />
      </div>
      <h3 id={`${id}-titulo`} className="produto-pequeno__nome">
        {name}
      </h3>
      <span className="produto-pequeno__separador" aria-hidden="true" />
      <p className="produto-pequeno__valor">{currencyFormatter.format(price)}</p>
    </article>
  );
}
