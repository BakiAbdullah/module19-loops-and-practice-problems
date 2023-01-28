for (var i = 1; i <= 20; i++) {
  console.log(i);
    if(i > 10) {
      break;
    }
}

var roastGiven = 0;
while(roastGiven < 10) {
  console.log('Roast den, Gift ansi.');
  roastGiven++
  if(roastGiven > 4) {
    break;
  }
}

var itemsOntable = ["bottle", "Pen", "mouse", "sunglass", "mobile", "diary"];

for (var i = 0; i < itemsOntable.length; i++) {
  var items = itemsOntable[i];
  if(items == 'sunglass') {
    break;
  }
  console.log(items);
}

var numbers = [45, 46, 48, 89, 30, 51, 25, 50, 100, 101, 102, 200, 300, 98, 1000];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 200) {
    break;
  }
  console.log(number);
}