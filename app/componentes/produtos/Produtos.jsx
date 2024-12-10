
import './produtoPequeno/produtospequenos.css'
import ProdutosPequenos from './produtoPequeno/ProdutosPequenos'

import './produtoMedio/produtosmedios.css'
import ProdutosMedios from './produtoMedio/ProdutosMedios'

import './produtoGrande/produtosgrandes.css'
import ProdutosGrandes from './produtoGrande/ProdutosGrandes'

import './produtos.css'

export default function Produtos(){
    return(
        <div className='produtos'>
            <h2>PRODUTOS</h2>
            <div className='item-dos-produtos'>
                <ProdutosPequenos identidade="sapato1" nome="sapatênis branco" valor="149.99"/>
                <ProdutosPequenos identidade="sapato2" nome="sapato branco" valor="154.99"/>
                <ProdutosPequenos identidade="sapato3" nome="sapato marrom claro" valor="130.00"/>
                <ProdutosPequenos identidade="sapato4" nome="sapato marrom escuro" valor="140.00"/>
                <ProdutosPequenos identidade="sapato5" nome="tênis azul acinzentado" valor="119.99"/>
                <ProdutosGrandes/>
                <ProdutosMedios nome={["NOVO","ESTILO","SKATES"]} identidade='skatista'/>
                <ProdutosPequenos identidade="paisagem1" nome="acampamento no campo" valor="730.00"/>
                <ProdutosPequenos identidade="paisagem2" nome="viagem para a praia no havaí" valor="2,300.00"/>
                <ProdutosPequenos identidade="paisagem3" nome="trilha no campo e na floresta" valor="250.00"/>
                <ProdutosMedios nome={["UNIFORME","AMIGAVEL","FASHION"]} identidade='sapato'/>
            </div>
        </div>
    )
}