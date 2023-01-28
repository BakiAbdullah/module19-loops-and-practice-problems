var numbers = [45, 46, 48, 89, 30, 51, 25, 50, 100, 101, 102, 200, 300, 98, 1000];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 50) {
    continue;
  }
  console.log(number);
}