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
