import type { KepTipus } from "../adat";
import KisKep from "./Kiskep";

interface GaleriaProps{
    lista: KepTipus[],
    i:number
}
function Galeria({lista,i}:GaleriaProps){
    return(
        <div className='galeria'>
            {
                lista.map((e,i)=>{
                    return <KisKep kepem={e} index={i} key={i} isAktiv={i === i} />
                })
            }
        </div>
    )
}
export default Galeria