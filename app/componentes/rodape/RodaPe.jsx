'use client'
import './rodape.css'

export default function RodaPe(){

    function handler(){
        alert("Email "+ document.getElementById("email").value +" Adicionado com sucesso")
    }

    return(
        <div className='rodape'>
            <div className='categorias'>
                <p>Categorias</p>
                <a href='#'>Novidades</a> <br/>
                <a href='#'>Masculino</a> <br/>
                <a href='#'>Feminino</a> <br/>
                <a href='#'>Infantil</a>
            </div>

            <div className='categorias'>
                <p>Suporte</p>
                <a href='#'>Atendimento</a> <br/>
                <a href='#'>Pagamento</a> <br/>
                <a href='#'>Pedidos</a> <br/>
            </div>

            <div className='categorias'>
                <p>Contatos</p>
                <a href="#">facebook</a> <br/>
                <a href="#">twitter</a> <br/>
                <a href="#">instagram</a> <br/>
                <a href="#">youtube</a> 
            </div>

            <div className='categorias'>
                <p>Inscreva-se</p>
                <span>Receba noticias em seu e-mail.</span> <br/>
                <input id="email" placeholder='digite o seu email'/>
                <button onClick={handler}>Enviar</button>
            </div>
        </div>
    )
}