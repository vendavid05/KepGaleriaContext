
import { KEPLISTA} from './adat'
import './App.css'

import NagyKep from './component/NagyKep'
import Galeria from './component/Galeria'
import { KepContext, useKepContext } from './contexts/KepContext'

function App() {  
  const { i } = useKepContext()

  
 return (
    <>
      <header><h1>Képgaléria</h1></header>
      <main>

        <NagyKep kepem={KEPLISTA[i]}   />
        <Galeria  lista={KEPLISTA} i={i} />
      </main>
      <footer>Vén Dávid</footer>
    </>
  )
}

export default App