"use client";

import { useMemo, useState } from "react";
import "./cabecalho.css";

const navigationSections = [
  {
    label: "Web",
    links: ["Aplicativo", "Contato", "Lojas físicas"],
  },
  {
    label: "Novidades",
    links: ["Blusas", "Calças", "Tênis", "Conjuntos"],
  },
  {
    label: "Kids",
    links: ["Tênis", "Brindes", "Prêmios"],
  },
  {
    label: "Feminino",
    links: ["Blusas", "Calças", "Tênis", "Vestidos"],
  },
  {
    label: "Masculino",
    links: ["Blusas", "Calças", "Tênis", "Jaquetas"],
  },
  {
    label: "Latest",
    links: ["Contratos", "Funcionários", "Lojas"],
  },
  {
    label: "Sale",
    links: ["Contratos", "Peças", "Lojas"],
  },
];

export default function Cabecalho() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const quickActions = useMemo(
    () => [
      { label: "Ajuda", href: "#" },
      { label: "Lojas", href: "#" },
      { label: "Conta", href: "#" },
    ],
    []
  );

  const handleToggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };

  return (
    <header className={`cabecalho ${isMenuOpen ? "cabecalho--menu-aberto" : ""}`}>
      <div className="cabecalho__topo">
        <a className="cabecalho__logo" href="#" aria-label="Página inicial Vans" />
        <label className="cabecalho__campo-busca">
          <span className="sr-only">Buscar produtos</span>
          <input
            className="cabecalho__input"
            type="search"
            placeholder="Buscar Old Skool..."
            spellCheck={false}
            aria-label="Buscar produtos"
          />
        </label>
        <select className="cabecalho__select" aria-label="Filtrar categoria">
          <option value="mais">Mais</option>
          <option value="calcas">Calças</option>
          <option value="blusas">Blusas</option>
          <option value="tenis">Tênis</option>
        </select>
        <nav className="cabecalho__links-rapidos" aria-label="Acesso rápido">
          {quickActions.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="cabecalho__menu-toggle"
          onClick={handleToggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="navegacao-principal"
        >
          <span aria-hidden="true">{isMenuOpen ? "✕" : "☰"}</span>
          <span className="sr-only">
            {isMenuOpen ? "Fechar menu" : "Abrir menu"}
          </span>
        </button>
      </div>

      <nav
        id="navegacao-principal"
        className="cabecalho__navegacao"
        aria-label="Navegação principal"
      >
        <ul className="cabecalho__lista">
          {navigationSections.map(({ label, links }) => (
            <li key={label} className="cabecalho__item">
              <span className="cabecalho__item-label">{label}</span>
              <div className="cabecalho__dropdown">
                {links.map((link) => (
                  <a key={link} href="#">
                    {link}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
