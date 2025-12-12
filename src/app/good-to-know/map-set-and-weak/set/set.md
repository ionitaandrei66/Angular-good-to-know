1️⃣ Definiție simplă

Set = o mulțime de valori UNICE.
Poți băga valori în el, dar nu acceptă duplicate. Dacă încerci să adaugi de 3 ori aceeași valoare, tot o singură dată apare.

Gândește-l ca pe:
o listă în care nu există duplicate,
cu metode mișto: add, has, delete, clear.


2️⃣ Definiție „ca la carte”

Set<T> este o colecție de valori unice, ordonate după inserare, fără chei asociate.
Oferă operații eficiente pentru:
adăugare (add(value)),
verificare existență (has(value)),
ștergere (delete(value)),
golire (clear()),
și garantează că fiecare element apare cel mult o singură dată în colecție.
Este foarte util când:
vrei să ții ID-uri unice (ex. selecții într-un tabel),
vrei să te asiguri că nu bagi același lucru de 10 ori,
trebuie să întrebi rapid: „e sau nu e valoarea asta în colecție?”.
