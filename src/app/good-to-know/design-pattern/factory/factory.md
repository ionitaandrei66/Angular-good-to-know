Definiție (ca la carte)
Factory pattern definește o metodă responsabilă să creeze/returneze obiecte, fără ca apelantul să știe clasa concretă care este instanțiată. Alegerea implementării se face în interiorul „fabricii”.

Factory pattern este un creational design pattern care:

angajează o entitate dedicată (factory) să decidă ce clasă concretă să folosească, pe baza unor criterii (config, enum, context),

ascunde logica de creare / alegere a implementării față de codul client,

ajută la:

decuplarea codului de tipuri concrete,

extensibilitate (adaug o nouă implementare, modific factory-ul, nu tot codul din aplicație),

respectarea principilor ca Open/Closed și Single Responsibility.
