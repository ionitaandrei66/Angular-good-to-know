1️⃣ WeakSet

Simplu:

Ca un Set, dar poate conține doar obiecte, și nu le ține „în viață” – dacă nu mai sunt referite în altă parte, garbage collector-ul le șterge.

Pe scurt:

doar obiecte, nu numere/stringuri

nu are size, nu poți itera peste el

folosit pentru „țin minte că am văzut obiectul ăsta”, fără să îl împiedici să fie colectat.
