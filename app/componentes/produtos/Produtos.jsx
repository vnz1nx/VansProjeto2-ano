import ProdutosPequenos from "./produtoPequeno/ProdutosPequenos";
import ProdutosGrandes from "./produtoGrande/ProdutosGrandes";
import ProdutosMedios from "./produtoMedio/ProdutosMedios";
import "./produtos.css";

const smallProducts = [
  { id: "sapato1", name: "Sapatênis branco", price: 149.99 },
  { id: "sapato2", name: "Sapato branco", price: 154.99 },
  { id: "sapato3", name: "Sapato marrom claro", price: 130.0 },
  { id: "sapato4", name: "Sapato marrom escuro", price: 140.0 },
  { id: "sapato5", name: "Tênis azul acinzentado", price: 119.99 },
  { id: "paisagem1", name: "Acampamento no campo", price: 730.0 },
  { id: "paisagem2", name: "Viagem para a praia no Havaí", price: 2300.0 },
  { id: "paisagem3", name: "Trilha no campo e na floresta", price: 250.0 },
];

const mediumProducts = [
  { id: "skatista", highlights: ["Novo", "Estilo", "Skates"] },
  { id: "sapato", highlights: ["Uniforme", "Amigável", "Fashion"] },
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
