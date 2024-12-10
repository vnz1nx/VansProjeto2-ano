import './cabecalho.css'

export default function Cabecalho(){
    return(
        <div className='cabecalho'>
            <div className='pesquisa'>
                <div className='logo'></div>
                <input type="search" className='search' placeholder="Old Skooll..."/>
                <select>
                    <option>MAIS</option>
                    <option>CALÇAS</option>
                    <option>BLUSAS</option>
                    <option>TENIS</option>
                </select>
                <a href="#" className='Ajuda'>AJUDA</a>
                <a href="#" className='Lojas'>LOJAS</a>
                <a href="#" className='Conta'>CONTA</a>
                {/* <div className='tracoBord'></div> */}
            </div>

            <ul className="opcoes">
                <li className="dropdown" id="Web">
                    <span>WEB</span>
                    <div className="dropdown-content">
                        <a href="#">Aplicativo</a><br />
                        <a href="#">Contato</a><br />
                        <a href="#">Lojas Fisicas</a>
                    </div>
                </li>

                <li className="dropdown" id="Novidades">
                    <span>NOVIDADES</span>
                    <div className="dropdown-content">
                        <a href="#">Blusas</a><br />
                        <a href="#">Calças</a><br />
                        <a href="#">Tenis</a><br />
                        <a href="#">Conjutos</a>
                    </div>
                </li>

                <li className="dropdown" id="Kids">
                    <span>KIDS</span>
                    <div className="dropdown-content">
                        <a href="#">Tenis</a><br />
                        <a href="#">Brindes</a><br />
                        <a href="#">Premios</a>
                    </div>
                </li>

                <li className="dropdown" id="Feminino">
                    <span>FEMININO</span>
                    <div className="dropdown-content">
                        <a href="#">Blusas</a><br />
                        <a href="#">Calças</a><br />
                        <a href="#">Tenis</a><br />
                        <a href="#">Vestidos</a>
                    </div>
                </li>

                <li className="dropdown" id="Masculino">
                    <span>MASCULINO</span>
                    <div className="dropdown-content">
                        <a href="#">Blusas</a><br />
                        <a href="#">Calças</a><br />
                        <a href="#">Tenis</a><br />
                        <a href="#">Jaquetas</a>
                    </div>
                </li>

                <li className="dropdown" id="Latest">
                    <span>LATEST</span>
                    <div className="dropdown-content">
                        <a href="#">Contratos</a><br />
                        <a href="#">Funcionarios</a><br />
                        <a href="#">Lojas</a>
                    </div>
                </li>

                <li className="dropdown" id="Sale">
                    <span>SALE</span>
                    <div className="dropdown-content">
                        <a href="#">Contratos</a><br />
                        <a href="#">Peças</a><br />
                        <a href="#">Lojas</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}