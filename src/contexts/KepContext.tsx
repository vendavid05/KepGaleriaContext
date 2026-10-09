import { createContext, useContext, useState } from "react";
import { KEPLISTA } from "../adat";


interface KepContextValue {
    i:number,
    kivalaszt: (index:number) => void
    leptet: (irany: boolean) => void

}

export const KepContext = createContext <KepContextValue | undefined>(undefined)

type KepProviderProps = {
    children: React.ReactNode
}
export function KepProvider({ children }: KepProviderProps ) {  
    const [i,setI]=useState<number>(0)
    
      
      function kivalaszt(index:number){
        console.log(index)
        setI(index)
      }
      
      function leptet(irany: boolean) {
        console.log(irany)
        let listaHossz = KEPLISTA.length
        if (listaHossz === 0) return
        let i: number = 0 
        if (irany) {
          i = (i + 1) % listaHossz
        } else {
          i = ((i - 1) + listaHossz) % listaHossz
        }
    
        setI(i)


    return (
        <KepContext.Provider value={{i, kivalaszt, leptet}}>
            {children}
        </KepContext.Provider>
    )
    }
}
export function useKepContext() {
const context = useContext(KepContext)

  if (context === undefined) {
    throw new Error('KepContext is not available')
  }

  const { i } = context;
}
