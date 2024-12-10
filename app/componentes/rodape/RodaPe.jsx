'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faFire, faMale, faFemale, faChild, faHeadset, faPhone, faCreditCard, faBox, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './rodape.css';

export default function RodaPe() {
    function handler() {
        alert("Email " + document.getElementById("email").value + " Adicionado com sucesso");
    }

    return (
        <div className="rodape">
            <div className="categorias">
                <p><FontAwesomeIcon icon={faList} /> Categorias</p>
                <a href="#"><FontAwesomeIcon icon={faFire} /> Novidades</a> <br />
                <a href="#"><FontAwesomeIcon icon={faMale} /> Masculino</a> <br />
                <a href="#"><FontAwesomeIcon icon={faFemale} /> Feminino</a> <br />
                <a href="#"><FontAwesomeIcon icon={faChild} /> Infantil</a>
            </div>

            <div className="categorias">
                <p><FontAwesomeIcon icon={faHeadset} /> Suporte</p>
                <a href="#"><FontAwesomeIcon icon={faPhone} /> Atendimento</a> <br />
                <a href="#"><FontAwesomeIcon icon={faCreditCard} /> Pagamento</a> <br />
                <a href="#"><FontAwesomeIcon icon={faBox} /> Pedidos</a> <br />
            </div>

            <div className="categorias">
                <p><FontAwesomeIcon icon={faEnvelope} /> Contatos</p>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a> <br />
                <a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a> <br />
                <a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a> <br />
                <a href="#"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
            </div>

            <div className="categorias">
                <p><FontAwesomeIcon icon={faEnvelope} /> Inscreva-se</p>
                <span>Receba notícias em seu e-mail.</span> <br />
                <input id="email" placeholder="Digite o seu email" />
                <button onClick={handler}><FontAwesomeIcon icon={faPaperPlane} /> Enviar</button>
            </div>
        </div>
    );
}
