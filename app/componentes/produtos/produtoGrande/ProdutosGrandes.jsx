'use client'
import { useState } from 'react'
import '../produtoPequeno/produtospequenos.css'
import ProdutosPequenos from '../produtoPequeno/ProdutosPequenos'

export default function ProdutosGrandes() {
    const camisas = [
        { id: "camisa1", nome: "CAMISA GTA SAN ANDREAS", valor: "70.00" },
        { id: "camisa2", nome: "CAMISA LOS SANTOS", valor: "80.00" },
        { id: "camisa3", nome: "CAMISA GROVE STREET", valor: "75.00" },
    ];

    const [indiceAtual, setIndiceAtual] = useState(0);
    const passarCamisa = () => {
        setIndiceAtual((prevIndice) => (prevIndice + 1) % camisas.length);
    };

    const voltarCamisa = () => {
        setIndiceAtual((prevIndice) =>
            (prevIndice - 1 + camisas.length) % camisas.length
        );
    };

    return (
        <div className='produtos-grandes'>
            <div className='produtos-grandes-dados'>
                <p className='nome'>
                    NOVOS <br />
                    ESTILOS <br />
                    E MAIS
                </p>
                <div className='linha'></div>
                <button className='comprar'>COMPRAR</button>
            </div>

            <div className='itens'>
                <button id='volta' onClick={voltarCamisa}>‹</button>
                <div className='item'>
                    <ProdutosPequenos
                        identidade={camisas[indiceAtual].id}
                        nome={camisas[indiceAtual].nome}
                        valor={camisas[indiceAtual].valor}
                    />
                </div>
                <button id='passa' onClick={passarCamisa}>›</button>
            </div>
        </div>
    );
}
