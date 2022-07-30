type Words = {
  [key: string]: string;
};

class Word {
  constructor(public term: string, public def: string) {
    {
    }
  }
}

class Dict {
  public words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (!this.words[word.term]) {
      this.words[word.term] = word.def;
    } else console.log("이미 정의된 단어");
  }

  get(word: Word) {
    if (this.words[word.term]) {
      return console.log(word.def);
    }
  }

  delete(word: Word) {
    if (this.words[word.term]) {
      delete this.words[word.term];
      console.log(`${word.term}이 삭제됨`);
    } else console.log("정의되지 않은 단어.");
  }

  update(word: Word, newDef: string) {
    if (this.words[word.term]) {
      this.words[word.term] = newDef;
      console.log("업데이트 성공");
    } else console.log("정의되지 않은 단어.");
  }

  count() {
    return console.log(`총 단어의갯수 : ${Object.keys(this.words).length}`);
  }

  showAll() {
    return console.log(this.words);
  }
}

const soiSoruceCrap = new Word("간장게장", "밥도둑 간장게장등딱지슉슈슈슉");
const jjamBBong = new Word("짬뽕", "술마시고다음날죽인다카이");
const tong_sae_woobuger = new Word(
  "통새우버거",
  "버거킹에서 이것만 시켜먹는다"
);
const mintCokoIce = new Word("민트초코아이스크림", "사양한다.");

const dict = new Dict();

dict.add(soiSoruceCrap);
dict.add(jjamBBong);
dict.add(tong_sae_woobuger);
dict.add(mintCokoIce);

dict.showAll();

dict.count();

dict.delete(mintCokoIce);

dict.showAll();
dict.count();

dict.update(jjamBBong, "맛있다.");

dict.showAll();

dict.get(tong_sae_woobuger);

dict.count();
