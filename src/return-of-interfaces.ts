export {};

class Mahotukai {}
class Souryo {}
// クラスは２つ継承できない
class Taro extends Mahotukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}
// インターフェイスは多重継承出来る
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();