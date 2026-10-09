Futtatasi parancsok

npm install
npm run dev        # fejlesztői szerver
npm run build      # éles build (TypeScript-ellenőrzéssel)
npm run preview    # a lebuildelt oldal megnézése

public/
  └-- kepek/                  # Statikus képfájlok tárolója
src/
  ├-contexts/
  │   └--GaleriaContext.tsx  # Globális állapotkezelés (Context, Provider, custom hook)
  ├--components/
  │   ├--NagyKep.tsx         # Kiemelt kép és a léptetőgombok komponense
  │   ├--Galeria.tsx         # Kisképek rácsa (grid tároló)
  │   └--KisKep.tsx          # Egyetlen kiskép előnézete
  ├--adatok.tsx              # Típusdefiníciók (KepAdat) és alapértelmezett képadatok
  ├--App.tsx                 # Az alkalmazás főszerkezete és elrendezése
  └--main.tsx                # Belépési pont (az App becsomagolása a Providerrel)

  Model:
  -Előállítjuk a  program aktuális állapotát 
  -Adatokon végez műveleteket
  -Getterek 
  -Setter 
  -Tagfüggvények 
  -NINCS: Megjeleníteni 
  Kepgaleriaban:
  LISTA  
  aktIndex 

  Controller:
  -Kapcsolatot tart a M és V között 
  -Megfoghatjuk azokat a tárolókat, amikbe pakoljuk a viewt 
  -Példányosítja  a View-t  
  -Példányosítja Model-t is 
  -Feliratkozik az eseménykezelőkre 
  -Hívja a modell és a view tagfüggvényeit. ű
  Kepgaleriaban:
  -Példányosítja  a View-t  
  -Példányosítja Model-t is 
  -Feliratkozik az eseménykezelőkre
  -Hívja a modell és a view tagfüggvényeit. 

  View:
  -Megjeleníti az adatokat 
  -HTML elemek 
  -Eseménykezelők,  
  -saját események 
    Kepgaleriaban:
  -Kep – egyetlen képet jelenít meg 
  -Galeria - összes kisképet 
  -NagyKep - felső kép, a léptetőgombokkal 

