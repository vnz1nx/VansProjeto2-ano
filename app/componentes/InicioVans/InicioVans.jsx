import Cabecalho from "./cabecalho/Cabecalho";
import "./iniciovans.css";

export default function InicioVans() {
  return (
    <section className="hero">
      <div className="hero__overlay" aria-hidden="true" />
      <Cabecalho />
      <div className="hero__content">
        <h1 className="hero__title">Vans is Old Skool</h1>
        <p className="hero__description">
          A Vans é referência em lifestyle, com calçados e acessórios cheios de
          autenticidade para te acompanhar em qualquer rolê.
        </p>
        <a className="hero__cta" href="#produtos">
          Compre agora
        </a>
      </div>
    </section>
  );
}
