
export default function ProdutosPequenos({identidade, nome, valor, indentidadeItem}){
    return(<>
        <div className='produtos-pequenos' id={indentidadeItem}>
            <div className='imagem' id={identidade}></div>
            <div className='nome'>{nome}</div>
            <div className='linha'></div>
            <div className='valor'>R${valor}</div>
        </div>
    </>)
}
