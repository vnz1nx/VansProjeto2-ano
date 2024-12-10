
import Cabecalho from './cabecalho/Cabecalho'
import './iniciovans.css'

export default function InicioVans(){
    return(
        <div className='inicio'>
            <Cabecalho/>

            <div className='mensagem'>
                <h1>VANS IS OLD SKOOL</h1>
                <p>
                    A Vans é líder em moda com <br/>
                    calçados e acessórios de alta <br/>
                    qualidade e estilo autêntico.
                </p>
                <button>COMPRE AGORA</button>
            </div>
        </div>
    )
}
