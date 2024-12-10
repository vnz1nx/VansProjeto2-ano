'use client'
import { useState } from 'react'               

import '../produtoPequeno/produtospequenos.css'
import ProdutosPequenos from '../produtoPequeno/ProdutosPequenos'

export default function ProdutosGrandes(){
    return(<>
        <div className='produtos-grandes'>
            <div className='produtos-grandes-dados'>
                <p className='nome'>
                    NOVOS <br/>
                    ESTILOS <br/>
                    E MAIS
                </p>
                <div className='linha'></div>
                <button className='comprar'>COMPRAR</button>
            </div>

            <div className='itens'>
                <button id='volta'>‹</button>
                <div className='item'>
                    <ProdutosPequenos identidade="camisa1" nome="CAMISA GTA SAN ANDREAS" valor="70.00"/>
                </div>
                <button id='passa'>›</button>
            </div>    
        </div>
    </>)
}

