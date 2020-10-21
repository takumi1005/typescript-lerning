export {};

class VisaCard {
  constructor(public readonly owner: string) {}
  // publicは省略出来るが好ましくない
  // constructor(readonly owner: string) {}
}

let myVisaCard = new VisaCard('taku');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'aaa';