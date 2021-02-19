class HoldNumber {
  data: number;
}

class HoldString {
  data: string;
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = "aaslkdjf";

class HoldAnything<T> {
  data: T;

  add(a: T): T {
    return a;
  }
}

const holdNumberGeneric = new HoldAnything<number>();
holdNumberGeneric.data = 123;

const holdStringGeneric = new HoldAnything<string>();
holdStringGeneric.data = "asdlkfj";
