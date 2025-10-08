"use client";

import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faChild,
  faCreditCard,
  faEnvelope,
  faFire,
  faHeadset,
  faList,
  faMale,
  faPhone,
  faFemale,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./rodape.css";

export default function RodaPe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const categories = useMemo(
    () => [
      {
        icon: faList,
        title: "Categorias",
        links: [
          { icon: faFire, label: "Novidades" },
          { icon: faMale, label: "Masculino" },
          { icon: faFemale, label: "Feminino" },
          { icon: faChild, label: "Infantil" },
        ],
      },
      {
        icon: faHeadset,
        title: "Suporte",
        links: [
          { icon: faPhone, label: "Atendimento" },
          { icon: faCreditCard, label: "Pagamento" },
          { icon: faBox, label: "Pedidos" },
        ],
      },
      {
        icon: faEnvelope,
        title: "Contatos",
        links: [
          { icon: faFacebook, label: "Facebook" },
          { icon: faTwitter, label: "Twitter" },
          { icon: faInstagram, label: "Instagram" },
          { icon: faYoutube, label: "YouTube" },
        ],
      },
    ],
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      setMessage("Digite um e-mail válido para se inscrever.");
      return;
    }

    setMessage(`E-mail ${email} cadastrado com sucesso!`);
    setEmail("");
  };

  return (
    <footer className="rodape">
      <div className="rodape__conteudo">
        {categories.map(({ icon, title, links }) => (
          <div key={title} className="rodape__coluna">
            <p className="rodape__titulo">
              <FontAwesomeIcon icon={icon} /> {title}
            </p>
            <ul className="rodape__lista">
              {links.map(({ icon: linkIcon, label }) => (
                <li key={label}>
                  <a href="#">
                    <FontAwesomeIcon icon={linkIcon} /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rodape__coluna rodape__coluna--formulario">
          <p className="rodape__titulo">
            <FontAwesomeIcon icon={faEnvelope} /> Inscreva-se
          </p>
          <p className="rodape__texto">
            Receba as novidades, lançamentos e promoções direto no seu e-mail.
          </p>
          <form className="rodape__formulario" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="sr-only">
              Digite o seu e-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Digite o seu e-mail"
              required
            />
            <button type="submit">Inscrever</button>
          </form>
          {message && <span className="rodape__mensagem">{message}</span>}
        </div>
      </div>

      <div className="rodape__base">
        <p>© {new Date().getFullYear()} Vans. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
