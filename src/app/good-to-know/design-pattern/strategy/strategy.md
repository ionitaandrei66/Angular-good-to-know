🔹 Strategy (cum vrei tu, pe scurt):

Strategy = același lucru de făcut, dar cu mai multe variante de comportament, toate având aceeași interfață, și tu alegi la runtime care variantă (strategie) să folosești.

Și încă mai scurt, de ținut minte:

Strategy = schimb comportamentul, nu codul care îl folosește.
Am o interfață comună și mai multe implementări, și în funcție de context aleg una dintre ele.

Strategy pattern este un behavioral design pattern care:

definește o interfață comună pentru o familie de algoritmi / comportamente,

fiecare algoritm este încapsulat într-o clasă separată (strategie concretă),

codul client lucrează doar cu interfața, iar strategia concretă este aleasă la runtime
(prin config, enum, context etc.),

astfel, poți schimba comportamentul fără să modifici codul clientului, doar schimbi ce strategie folosești.


Strategy = mai multe variante de aceeași chestie, toate cu aceeași interfață, și alegi una la runtime.

Și spus un pic mai clar:

ai o interfață comună (ex. PricingStrategy { calculate(...) }),

ai mai multe clase care o implementează (standard, discount, premium),

codul care o folosește (componentă/serviciu) nu știe care variantă e în spate, doar cheamă strategy.calculate(...).


