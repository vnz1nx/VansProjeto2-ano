import ProdutosPequenos from "./produtoPequeno/ProdutosPequenos";
import ProdutosGrandes from "./produtoGrande/ProdutosGrandes";
import ProdutosMedios from "./produtoMedio/ProdutosMedios";
import "./produtos.css";

const smallProducts = [
  {
    id: "sapato1",
    name: "Sapatênis branco",
    price: 149.99,
    imageUrl:
      "https://images.unsplash.com/photo-1528701800489-20be3c2ea1b7?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Par de sapatênis branco com detalhe em couro caramelo",
  },
  {
    id: "sapato2",
    name: "Sapato branco",
    price: 154.99,
    imageUrl:
      "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Sapatos casuais brancos posicionados sobre fundo neutro",
  },
  {
    id: "sapato3",
    name: "Sapato marrom claro",
    price: 130.0,
    imageUrl:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Sapato social marrom claro visto de cima",
  },
  {
    id: "sapato4",
    name: "Sapato marrom escuro",
    price: 140.0,
    imageUrl:
      "https://images.unsplash.com/photo-1508154048109-de555266b50d?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Sapato de couro marrom escuro com cadarço grosso",
  },
  {
    id: "sapato5",
    name: "Tênis azul acinzentado",
    price: 119.99,
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Tênis azul acinzentado sobre piso de madeira",
  },
  {
    id: "paisagem1",
    name: "Acampamento no campo",
    price: 730.0,
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Barraca iluminada durante a noite em campo aberto",
  },
  {
    id: "paisagem2",
    name: "Viagem para a praia no Havaí",
    price: 2300.0,
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Praia no Havaí com ondas azul turquesa",
  },
  {
    id: "paisagem3",
    name: "Trilha no campo e na floresta",
    price: 250.0,
    imageUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Trilha atravessando campo verde e árvores",
  },
];

const mediumProducts = [
  {
    id: "skatista",
    highlights: ["Novo", "Estilo", "Skates"],
    imageUrl:
      "https://images.unsplash.com/photo-1517478713702-2d3d54b220f2?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Skatista executando manobra com tênis Vans",
  },
  {
    id: "sapato",
    highlights: ["Uniforme", "Amigável", "Fashion"],
    imageUrl:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Pessoa usando tênis Vans pretos em calçada urbana",
  },
];

export default function Produtos() {
  return (
    <section className="produtos" id="produtos">
      <div className="produtos__cabecalho">
        <span className="produtos__etiqueta">Produtos em destaque</span>
        <h2 className="produtos__titulo">Encontre o par perfeito para cada momento</h2>
        <p className="produtos__descricao">
          Selecionamos lançamentos e clássicos Vans para completar sua
          coleção. Escolha seu estilo favorito ou explore novas combinações.
        </p>
      </div>

      <div className="produtos__grid">
        {smallProducts.slice(0, 5).map((produto) => (
          <ProdutosPequenos key={produto.id} {...produto} />
        ))}

        <ProdutosGrandes />

        {mediumProducts.map((produto) => (
          <ProdutosMedios key={produto.id} {...produto} />
        ))}

        {smallProducts.slice(5).map((produto) => (
          <ProdutosPequenos key={produto.id} {...produto} />
        ))}
      </div>
    </section>
  );
}
