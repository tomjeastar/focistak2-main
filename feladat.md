# Feladatok
## github
1. Készítsen egy repo-t `focistak` néven
2. A `repok excel fájlba` jegyezze be a repo útvonalát
3. Klónozza le a repót saját tokenjével a `2022.12.12json` mappába
4. másoljon át mindent a `2022.12.12json`-ból a `focistak` mappába
5. készítsen erről az állapotról `kiindulás` néven egy commei-tot és push-olja fel.

## json szerver átalakítása
### adatstruktúra
1. nevezze át a `data` mappában lévő `products` gyűjteményt `players`-re
2. Az alábbi adatszerkezet segítségével tegyen be két teszt játékost az `players` gyűjteménybe
```json
player = {
    "id": "string", 
    // "name": "string",
    "qualification": int, //A játékos minősítése (1-10)
    "position": "string", //hátvéd, csatár, stb.
    "club": "string", //melyik klubban játszik
    "age": int, // hány éves
    "nationality": "string" // nemzetiség
}
```
3. commit: `players tesztadatok`, majd push

### request.rest
1. Alakítsa át `request.rest` fájlt, hogy majd később tesztelhesse a json szerverét. 
2. `products` helyett értelem szerűen használja a `players` erőforrás megnevezést
3. commit: `request.rest átlakítva`, majd push

### backend átalakítása
Az alábbi módosítánál ügyeljen arra, hogy 
- a szöveges adatoknál építse be a betörés védelmet.
- A változók nevei tükrözzék az átalakítást: product helyett a player szó szerepeljen értelemszerűen.

1. alakítsa át minden műveletnél az útvonalakat
    - commit: `útvonalak cseréje`, majd push

2. `get /players` átlakítása és tesztelése (request.rest-el)
    - commit: `get /players`, majd push

3. `get /players/:id` átlakítása és tesztelése (request.rest-el)
    - commit: `get /players/:id`, majd push

4. `post /players` átlakítása és tesztelése (request.rest-el)
    - commit: `post /players`, majd push

5. `delete /players/:id` átlakítása és tesztelése (request.rest-el)
    - commit: `delete /players/:id`, majd push    

6. `put /players/:id` átlakítása és tesztelése (request.rest-el)
    - commit: `put /players/:id`, majd push

7. A request.rest-el tesztelje a betörés védelmet post és put esetére a `<script>alert('betörtem')</script>` rosszindulatú szöveges támadásra minden szöveges mezőnél.   
    - commit: `betörésvédelem teszt`, majd push

## frontend        
### adatbevitel
1. a frontend mappába készítsen egy űrlapot: `appendForm.html` az adatbevitel céljából. Készítsen egy `my.js` fájlt és linkelje a html-hez.
    - használjon bootsrtap-et.
    - Az űrlapot conatainer segítségével helyezze középre
    - Legyen címe: Adatbevitel
    - Az mező címkével legyenek ellátva és legyenek egymás alatt
    - nem fontos hogy milyen szélesek a mezők, lehetnek egyformák
    - A mezők típusa helyesen legyen megválasztva
    - A mezőket lássa el megfelelő azonosítóval
    - Az űrlap alján legyen egy `mentés` gomb, aminek click eseményéhez rendeljen hozzá egy megfelelően elnevezett (pl. `playerAppend()`) függvényt
    - commit: `űrlap kész`, majd push


2. A fatch függvény használatával készítse el vagy then, vagy awayt szintaktikával az adatok posztolásához szükséges ajax kérést. 
    - A művelet helyes lefolyása után ürítse a mezők tartalmát.
    - használjon hibakezelést is.
    - commit: `poszt by fetch`

3. A művelet helyességét tesztelje a request.res-el (kérdezze le az adatokat).
    - vigyen fel az űrlap segítségével annyi focistát, hogy összesen 5db. szerepeljen az adatbázisban.
    - commit: `kliens poszt teszt ok`

