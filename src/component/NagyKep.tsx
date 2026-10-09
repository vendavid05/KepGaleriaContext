import { useContext } from "react";
import type { KepTipus } from "../adat";
import { KepContext } from "../contexts/KepContext";

interface NagyKepProps{
    kepem: KepTipus

}

function NagyKep({ kepem }: NagyKepProps) {
    const context = useContext(KepContext)
    
      if (context === undefined) {
        throw new Error('KepContext is not available')
      }
    
      const { leptet } = context;
     return (
        <div className="nagykepdiv" >
            <button className="bal" onClick={() => leptet(false)} aria-label="Következő kép"
                type="button">◀</button>
            <div>
                <div className="kep">
                    <img src={kepem.kep} alt={kepem.leiras || 'Kép'} />
                </div>
                <p>{kepem.leiras}</p>
            </div>
            <button className="jobb" onClick={() => leptet(true)} aria-label="Következő kép"
                type="button">▶</button>
        </div>
    )
}

export default NagyKep