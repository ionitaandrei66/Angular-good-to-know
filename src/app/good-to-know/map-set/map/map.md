1️⃣ Map în TypeScript / Angular
🔹 Definiție simplă

Map = un „dicționar” / „hartă”: asociezi o cheie cu o valoare.
Poți să cauți rapid o valoare după cheie (nu doar string, ci și numere, enum, chiar obiecte).


🔹 Definiție „ca la carte”
Map<K, V> este o colecție ordonată de perechi cheie–valoare, unde:
fiecare cheie este unică,
poate fi de orice tip (string, number, enum, object),
păstrează ordinea de inserare,
oferă operații eficiente de adăugare, citire, ștergere (set, get, delete, has).
Se diferențiază de obiectul clasic ({ [key: string]: any }) prin:
suport pentru chei non-string,
metodologie clară (set, get, has, delete, forEach),
iterează în ordinea în care ai inserat elementele.
