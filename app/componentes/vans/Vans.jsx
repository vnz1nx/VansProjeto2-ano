
import InicioVans from "../InicioVans/InicioVans";
import Produtos from "../produtos/Produtos";
import RodaPe from "../rodape/RodaPe";
import "./vans.css"

export default function Vans(){
    return(
        <div className="vans">
            <InicioVans/>
            <Produtos/>
            <RodaPe/>
        </div>
    )
}
