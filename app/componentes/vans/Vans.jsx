
import InicioVans from "../InicioVans/InicioVans";
import Produtos from "../produtos/Produtos";
import RodaPe from "../rodape/RodaPe";
import "./vans.css"

export default function Vans(){
    return(
        // a melhor largura é a de 1000px
        <div className="vans">
            <InicioVans/>
            <Produtos/>
            <RodaPe/>
        </div>
    )
}
