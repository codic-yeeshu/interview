let data = 123;

let reversedNum = 0;

while (data > 0) {
  digit = data % 10;
  reversedNum = reversedNum * 10 + digit;
  data = Math.floor(data / 10);
}
console.log(reversedNum);
