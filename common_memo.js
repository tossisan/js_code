// 配列から重複していない値を取得
const noDuplication = (arr) => {
  return arr.filter(
    (val, idx, self) => self.indexOf(val) === self.lastIndexOf(val)
  );
};

// 配列から重複している値を取得
const duplication = (arr) => {
  return arr.filter(
    (val, idx, self) => self.indexOf(val) !== self.lastIndexOf(val)
  );
};

// 文字を反転して返す
const reverseSting = (str) => {
  const splitString = str.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
};

// bit全探索
const fetchBitPattern = (n, f) => {
  for (let bit = 0; bit < 1 << n; bit++) {
    let row = [];
    for (let i = 0; i < n; i++) {
      if (bit & (1 << i)) {
        row.push(i);
      }
    }
    f(row);
  }
};
const number = [];
const A = 0;

const bitSerch = (arr, elm) => {
  fetchBitPattern(arr.length, (bit) => {
    let s = 0;
    let tmp = [];
    for (let i = 0; i < bit.length; i++) {
      s += arr[bit[i]];
      tmp.push(arr[bit[i]]);
    }
    if (s === elm) {
      console.log(tmp);
    }
  });
};

bitSerch(number, A);

// 昇順
arr.sort((a, b) => (a < b ? -1 : 1));

// 降順
arr.sort((a, b) => (a > b ? -1 : 1));

// find条件分岐
const list = [
  { name: "baseball", member: 9 },
  { name: "soccer", member: 11 },
  { name: "rugby", member: 15 },
  { name: "basketball", member: 5 },
  { name: "volleyball", member: 6 },
];

const elm = {
  name: "baseball",
};

const index = (elm) => {
  const listNumber = list.find((p) => p.name === elm.name).member;
  return listNumber;
};

console.log(index(elm));
