
export default function ProdutosMedios({nome, identidade}){
    return(<>
        <div className='produtos-medios'>
            <div className='produtos-medios-dados'>
                <p className='nome'>
                    {nome[0]} <br/>
                    {nome[1]} <br/>
                    {nome[2]}
                </p>
                <div className='linha'></div>
                <button className='comprar'>COMPRAR</button>
            </div>
            <div className='imagem' id={identidade}></div>    
        </div>
    </>)
}
